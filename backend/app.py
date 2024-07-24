from flask import Flask, render_template,request,jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS


app= Flask(__name__)
client = MongoClient('mongodb://localhost:27017')
db = client['flaskreactfullstack']
CORS(app)

@app.route('/')
def helloworld():
    return("Helloo world!")

@app.route('/users', methods=['GET', 'POST'])
def users():
    if request.method =='POST':
        body = request.json
        firstName = body['firstName']
        lastName = body['lastName']
        emailId = body['emailId']
        
        db['users'].insert_one({
            "firstName":firstName,
            "lastName":lastName,
            "emailId": emailId
        })
        return jsonify({
            'status':"Data is inserted Successfully!",
            'firstName':firstName,
            "lastName": lastName,
            'emailId': emailId
        })

    
    if request.method =='GET':
        allData=db['users'].find()
        dataJson=[]
        for data in allData:
            id =data['_id']
            firstName= data['firstName']
            lastName= data['lastName']
            emailId= data['emailId']

            dataDict ={
                "id":str(id),
                "firstName":firstName,
                "lastName": lastName,
                "emailId": emailId
            }
            dataJson.append(dataDict)
        return jsonify(dataJson)


@app.route('/users/<string:id>', methods=['GET', 'PUT', 'DELETE'])
def single_record():
    if request.method  == 'GET':
        data = db['users'].find_one({'_id':ObjectId(id)})
        id = data['_id']
        firstName= data['firstName']
        lastName= data['lastName']
        emailId= data['emailId']
        
        dataDict ={
            "id": str(id),
            "firstName": firstName,
            "lastName": lastName,
            "emailId": emailId
        }
        return jsonify(dataDict)

    if request.method == 'DELETE':
        db['users'].delete_one({"_id":ObjectId(id)})
        return jsonify({
            "status": "Data id:"+  id + "deleted succcessfully!"
        })
    
    if request.method == 'PUT':
        body = request.json
        firstName = body['firstName']
        lastName = body['lastName']
        emailId = body['emailId']
        
        db['users'].update_one({"_id":ObjectId(id)},{
            "$set": {
                "firstName": firstName,
                "lastName":lastName,
                "emailId": emailId
            }
        })
        

if __name__=='__main__':
    app.run(debug=True)