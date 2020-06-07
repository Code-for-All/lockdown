export default {
  "translationBy":"AherreDev",
  "languageId":"es-MX", // ? ISO 639-1:2002
  // ? Para más información consultar https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes y para ver las versiones consultar https://en.wikipedia.org/wiki/Language_localisation
  "header":{
    "version":"BETA",
    "totals":{
      "territoriesLockdown": "TERRITORIOS EN CUARENTENA",
      "peopleAffected":"PERSONAS AFECTADAS",
      "cases":"CASOS REPORTADOS",
      "deaths":"MUERTES REPORTADAS"
    }
  },
  "menu":{
    "informationSection":{
      "banner":"Project lockdown esta actualmente en fase beta. No todos los datos se encuentran disponibles.",
      "main":{
        "name": "Project Lockdown ",
        "text":"proove un mapeo de diferentes NPIs (No Intervenciones Farmaceuticas) aplicadas en todo el mundo en respuesta a la crisis COVID-19 para visualizar el éxito de diferentes medidas de respuesta ante una pandemia, monitorear los efectos sobre los Derechos Humanos y Digitales y aclarar las métricas de evaluación."
      },
      "about":{
        "title":"Acerca",
        "text":{
          "p1":"Se han implementado medidas de bloqueo, cuarentena y aislamiento en todo el mundo para reducir la propagación de COVID-19 y reducir la presión sobre la infraestructura médica.",
          "p2":"empodera a los ciudadanos, periodistas y defensores de los derechos humanos para analizar fácilmente los efectos sociales y políticos de estas medidas. Fundado en los valores de transparencia y rendición de cuentas.,",
          "p3":"se compromete a proporcionar a los ciudadanos del mundo las herramientas que necesitan para mantenerse seguros e informados."
        }
      },
      "sources":{
        "title":"Recursos",
        "subtitle": "combina múltiples fuentes confiables para garantizar que los datos utilizados sean verificados y precisos. Puede encontrar la lista completa de fuentes utilizadas aquí:",
        "linksList":{
          "first":{
            "linkTitle":"Base de datos de Project Lockdown",
            "text":"(Recolectada de un grupo de recursos de NPIs)"
          },
          "second":{
            "linkTitle":"Coronavirus COVID19 API",
            "text":"(Datos obtenidos de",
            "highlight": "Johns Hopkins CSSE)"
          }
        },
        "issues":{
          "text":"Si usted encuentra un error, porfavor ayudenos y reportelo",
          "highlight": "creando un reporte aquí"
        }
      },
      "credits":{
        "title":"Creditos",
        "text": "es una iniciativa de Civic Tech hecha posible por varias personas y organizaciones dedicadas. Ver la lista de contribuyentes",
        "highlight":"aquí"
      },
      "dataPrivacity":{
        "title":"Datos & Privacidad",
        "paragraphs":{
          "p1":"Nosotros no recolectamos datos de nuestros visitantes.",
          "p2":"Toda la información de los miembros del proyecto fue otorgada por ellos."
        }
      }
    },
    "userPreferenceSection":{
      "theme":{
        "action":"Cambiar a",
        "dark":"Modo Obscuro",
        "light": "Modo claro"
      },
      "geolocation":"Permitir geolocaliización",
      "app": {
        "install": "Instalar la aplicación",
        "update": "Actualizar la aplicación"
      }
    }
  },
  "tdo":{
    "tabs":{
      "dailyLife":{
        "name": 'Vida diaria',
        "stats":{
          "population": "Población",
          "max_assembly": "Max assembly",
          "cases":"Casos",
          "recoveries": "Recuperados",
          "deaths": "Muertes"
        },
        "measureValues":{
          '1': 'TOTAL',
          '2': 'PACIAL',
          '3': 'NINGUNO',
          '4': 'INCIERTO',
        },
        "measures":{
          "home": 'Quedarse en casa',
          "shopping": 'Compras',
          "outdoors": 'Al aire libre',
          "military": 'Militares',
          "religious": 'Sitios religiosos',
          "electricity": 'Electricidad',
          "work": 'Ir a trabajar',
          "water": 'Agua',
          "schools": 'Ir a la escuela',
          "internet": "Telecomunicaciones"
        }
      },
      "mobility":{
        "name": 'Mobilidad',
        "subtitle":"Transporte (restricciones)",
        "measureValues":{
          '1': 'TOTAL',
          '2': 'PACIAL',
          '3': 'NINGUNO',
          '4': 'INCIERTO',
        },
        "measures":{
          "commerce": 'Comercio',
          "foreignersInbound": 'Extranjeros (entrar)',
          "foreignersOutbound": 'Extranjeros (salir)',
          "local": 'Entre ciudades',
          "nationalsInbound": 'Nacionales (entrar)',
          "nationalsOutbound": 'Nacionales (salir)',
          "stopovers": 'Escalas',
          "crossBorderWorkers": 'Trabajadores transfronterizos'
        }
      },
      "reports":{
        "name": 'Reportes',
        "subtitle": "Próximamente"
      },
    }
  },
  "mapLegend":{
    "no":"Sin bloqueos",
    "partial":"Bloqueos parciales",
    "full":"Bloqueo total",
    "noData":"Sin datos",
    "cases":"COVID (Reportado)",
  }
}