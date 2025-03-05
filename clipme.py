from flask import Flask as fk
from pymongo import MongoClient as mc
from flask import request
from flask import render_template,url_for
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv as dot
import os
def secure():
  dot()
link=os.getenv('url')

client = MongoClient(link, server_api=ServerApi('1'))
mydb = client["mydatabase"]
mycol = mydb["customers"]
app=fk(__name__,template_folder="templates")
result=''
@app.route('/')

def server():
 try:
    return render_template('page_main.html')
    
 except Exception as e:
    return str(e)

@app.route('/', methods=['GET','POST'])
def get_data():
   if request.method=='POST':
   
    data=request.form.get('value')
    id=request.form.get('id')
    
    
   insert_data = { "id":id, "con": data }

   final_data = mycol.insert_one(insert_data)
   

    



@app.route('/<token>', methods=['POST','GET'])
def get_search_id(token):
   
 
     
     
    
    
   
    data_hello=mycol.find({'id':token},{"_id":0,"id":0})
    for x in data_hello:
     result=x['con']
    try: 
     return render_template('search_page.html',result=result)
    
    except Exception as e:
     return f'Data not found in Database'
    


   
   
       
        
       
       
       
if __name__=='__main__':
  app.run(debug=True)