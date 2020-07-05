export default {
  translationBy: 'Kota Yatagai (Code for Japan)',
  languageId: 'ja', // ? ISO 639-1:2002
  // ? For reference please see https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes and for localized versions see https://en.wikipedia.org/wiki/Language_localisation
  header: {
    totals: {
      territoriesLockdown: 'ロックダウン中の地域',
      peopleAffected: '陽性患者数',
      cases: '報告された症例',
      deaths: '報告された死者数',
    },
  },
  menu: {
    informationSection: {
      banner:
        '免責事項: Project Lockdownは新しいプラットフォームであり、コンポーネントは現在テストの段階です。すべてのデータが利用できるわけではありません。',
      main: {
        name: 'Project Lockdown',
        text:
          '{Project Lockdown} は、コロナウイルスの危機に際して世界中で実施されている多様なNPI（非医薬品介入）のマッピングを提供し様々なパンデミック対応策の成功を可視化することで、人権やデジタル著作権への影響を監視し、評価基準を明確化します。',
      },
      about: {
        title: '概要',
        text: {
          p1: 'COVID-19の拡散を抑え、医療インフラへの負担を軽減するために、世界中でロックダウン、検疫、隔離対策が実施されています。',
          p2:
            '{Project Lockdown} は、市民、ジャーナリスト、人権関係者が、これらの措置の社会的・政治的影響を簡単に分析できるようにしています。私たちは透明性と説明責任の価値観に基づいて活動しています。',
          p3: '{Project Lockdown} は、世界中の市民が安全に情報を得るために必要なツールを提供することを目標にしています。',
        },
      },
      sources: {
        title: '情報源',
        subtitle:
          '{Project Lockdown} は、複数の信頼できる情報源を参照しており、使用されているデータが検証され、正確であることを保証します。使用されている情報源のリストは以下からご覧いただけます。',
        linksList: {
          first: {
            linkTitle: 'Project Lockdownのデータベース',
            text: '複数のNPIソースからデータを収集しています',
          },
          second: {
            linkTitle: 'コロナウイルス COVID19 API',
            text: 'データ情報源は',
            highlight: 'こちら(Johns Hopkins CSSE)',
          },
        },
        issues: {
          text: '不具合やバグを発見した場合',
          highlight: 'こちらのページから報告してください',
        },
      },
      credits: {
        title: 'クレジット',
        text: '{Project Lockdown} は、多くの献身的な個人や団体によって実現されたシビックテックの取り組みです。コントリビューターの一覧は',
        highlight: 'こちら',
      },
      dataPrivacity: {
        title: 'データとプライバシー',
        paragraphs: {
          p1: '私たちはこのサイトの訪問者から個人的な情報を収集することはありません。',
          p2: 'プロジェクトメンバーの情報は、すべて本人の同意を得て提供しています。',
        },
      },
    },
    userPreferenceSection: {
      theme: {
        action: '',
        dark: 'ダークモードに変更',
        light: 'ライトモードに変更',
      },
      geolocation: '位置情報共有を許可する',
      app: {
        install: 'アプリをインストール',
        update: 'アプリをアップデート',
      },
    },
    contribution: {
      contributionLinks: {
        firstLink: 'プロジェクトのデータセット',
        secondLink: 'データを提供する',
        thirdLink: '修正を提案する',
      },
    },
  },
  tdo: {
    contributionLinks: {
      firstLink: 'この地域のデータセット',
      secondLink: 'データを提供する',
      thirdLink: '修正を提案する',
    },
    tabs: {
      dailyLife: {
        name: '日常生活',
        subtitle: '制限されている行動',
        noResults: 'N/A',
        stats: {
          population: '人口',
          max_assembly: 'Maximum assembly',
          max_assemblyShortVersion: 'Max. assembly',
          cases: '感染者数',
          recoveries: '回復者数',
          deaths: '死者数',
        },
        measureValues: {
          '1': '禁止',
          '2': '制限あり',
          '3': '制限無し',
          '4': '不明',
        },
        measures: {
          home: '外出する',
          homeShortVersion: '外出する',
          outdoors: '屋外で遊ぶ',
          outdoorsShortVersion: '屋外活動',
          shopping: '買い物に行く',
          shoppingShortVersion: '買い物',
          military: '軍事介入はない',
          militaryShortVersion: '軍事介入なし',
          religious: '宗教施設に行く',
          religiousShortVersion: '宗教施設',
          work: '仕事に行く',
          workShortVersion: '仕事',
          schools: '学校に行く',
          schoolsShortVersion: '学校',
          electricity: '電気が確保されている',
          electricityShortVersion: '電力',
          water: '水道が確保されている',
          waterShortVersion: '水道',
          internet: 'インターネットに接続できる',
          internetShortVersion: 'インターネット',
        },
      },
      mobility: {
        name: '移動',
        subtitle: '移動制限',
        measureValues: {
          '1': '禁止',
          '2': '制限あり',
          '3': '制限無し',
          '4': '不明',
        },
        measures: {
          foreignersInbound: '外国人の入国',
          foreignersInboundShortVersion: '外国人の入国',
          foreignersOutbound: '外国人の出国',
          foreignersOutboundShortVersion: '外国人の出国',
          local: '都市間の移動',
          localShortVersion: '都市間の移動',
          nationalsInbound: '海外からの入国',
          nationalsInboundShortVersion: '入国',
          nationalsOutbound: '国内からの出国',
          nationalsOutboundShortVersion: '出国',
          stopovers: '途中経由としての入国',
          stopoversShortVersion: '途中経由としての入国',
          crossBorderWorkers: '海外で働く労働者',
          crossBorderWorkersShortVersion: '海外で働く労働者',
          commerce: '貿易・商取引',
          commerceShortVersion: '貿易・商取引',
        },
      },
      reports: {
        name: 'レポート',
        subtitle: '準備中',
      },
    },
  },
  mapLegend: {
    no: 'ロックダウンしていない',
    partial: '部分的にロックダウン',
    full: '完全にロックダウン',
    noData: 'データ無し',
    cases: 'COVID-19',
  },
};
