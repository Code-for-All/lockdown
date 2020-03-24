from __future__ import print_function
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

# The ID and range of a sample spreadsheet.

SAMPLE_SPREADSHEET_ID = '1mVyQxxLxAF3E1dw870WHXTOLgYzmumojvzIekpgvLV0'
SAMPLE_RANGE_NAME = 'PHL!I2'

def main():
    """Shows basic usage of the Sheets API.
    Prints values from a sample spreadsheet.
    """
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    service = build('sheets', 'v4', credentials=creds)

    # Call the Sheets API
    connection = service.spreadsheets()
    sheet_info = connection.get(spreadsheetId=SAMPLE_SPREADSHEET_ID).execute()
    sheets = sheet_info['sheets']
    for sheet in sheets:
        title = sheet['properties']['title']
        if len(title) == 3:
            SAMPLE_RANGE_NAME = title+'!I2'
            # print(SAMPLE_RANGE_NAME)
            result = connection.values().get(spreadsheetId=SAMPLE_SPREADSHEET_ID,
                    range=SAMPLE_RANGE_NAME).execute()
            values = result.get('values', [])

            if not values:
                print('%s No data found.' % SAMPLE_RANGE_NAME)
            else:
                for row in values:
                    # What is the state of the info, ready for parsing?
                    print('*%s data is %s' % (SAMPLE_RANGE_NAME, row[0]))

if __name__ == '__main__':
    main()