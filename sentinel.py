#----IMPORTS NEED---------
import os
import requests
import json
import datetime
import time
from dateutil.relativedelta import relativedelta


#-------------SET DE VARIABLES--------------------------

date = str(datetime.datetime.now()).split(' ')[0]
nextdate = (datetime.datetime.strptime(date, '%Y-%m-%d') + relativedelta(months=1)).strftime('%Y-%m-%d')
ScrapperStatus= [
    {
        "name": "name"
    },
    {
        "$set": {
            "lastdate":date,
            "nextdate":nextdate,
            "status": "Scheduled",
            "requests": 0,
            "execute_time": "0"
        }
    }
]



#------Función para enviar alerta de Telegram a Sentinel--------

def sendMsgTelegram(parameters):
    #type 0=saludo, 1=inicio, 2=finalizacion, 3=error
    try: 
        info = requests.post('http://localhost:4060/send-alert', data=str(parameters))
        info_json = json.loads(info.text)
        print(info_json)
        print('Sentinel envio alerta correctamente')
            
    except Exception as e:
        print('Error de Sentinel al enviar alerta')
        print(e)


#----Función que envía actualizaciones a Sentinel--------------

def sendUpdate(update):
    try:
        info=requests.post('http://localhost:4060/s-update-status', data=str(update))
        info_json= json.loads(info.text)
        print(info_json)
        print('Sentinel actualizado correctamente')

    except Exception as e:
        print('Error de Sentinel al enviar actualización')
        print(e)


#------------INICIA ALGORITMO---------------------------

start_time = time.time()
parameters = {"type": "1", "name_scrap": "name"}
ScrapperStatus[1]["$set"]["status"] = "Running"
sendMsgTelegram(parameters)
sendUpdate(ScrapperStatus)


#-------------ERROR DE ALGORITMO-------------------------

parameters = {"type": "3", "name_scrap": "name"}
ScrapperStatus[1]["$set"]["status"] = "Error"            
sendMsgTelegram(parameters)
sendUpdate(ScrapperStatus)


#-------EXECUTE TIME (si no hay metadata.txt)-----------

last_time = time.time() - start_time
execute_time = str(datetime.timedelta(seconds=last_time))
    

#---------FINALIZA ALGORITMO----------------------------

parameters = {"type": "2", "name_scrap": "name"}
sendMsgTelegram(parameters)

ScrapperStatus[1]["$set"]["status"] = "Done"
ScrapperStatus[1]["$set"]["requests"] = int(df_marn.shape[0])
ScrapperStatus[1]["$set"]["execute_time"] = execute_time
sendUpdate(ScrapperStatus)
