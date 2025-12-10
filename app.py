from sqlalchemy import create_engine,Table,Column,String,Integer,Float
from sqlalchemy.orm import declarative_base, sessionmaker
from flask import Flask,request
import json
from flask_cors import CORS

engine = create_engine('sqlite:///database.db')

Base = declarative_base()


class Products(Base):
    __tablename__ = 'product'
    id = Column(Integer,primary_key=True)
    title = Column(String)
    price = Column(Float)
    description = Column(String)
    image = Column(String)


    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "price": self.price,
            "description": self.description,
            "image": self.image
        }
    


    def __repr__(self):
        return f"id:{self.id}, title:'{self.title}', description:'{self.description}')>"
        
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()
app = Flask("E-Commerce")
CORS(app)

@app.route("/")
def init():
    return "Ecommerce"

@app.route("/product",methods=['GET','POST'])
def product():
    if(request.method == "GET"):
        product = session.query(Products).all()
        return json.dumps([p.to_dict() for p in product])
    
    if(request.method == "POST"):
        json_data = json.loads(request.get_data())
        product = Products(title=json_data['title'],price=json_data['price'],image=json_data['image'],description=json_data['description'])
        session.add(product)
        session.commit()
         
    return ""

@app.route("/product/<int:id>",methods=['DELETE'])
def deleteProduct(id):
    product = session.query(Products).filter(Products.id == id).first()
    if product is None:
        return {"error":"Product Not found"},404
    session.delete(product)
    session.commit()
    return {"status":"deleted"}

@app.route("/product/<int:id>", methods=['PUT'])
def updateProduct(id):
    product = session.query(Products).filter(Products.id == id).first()

    if product is None:
        return {"error": "Product not found"}, 404

    json_data = json.loads(request.get_data())

    if "title" in json_data:
        product.title = json_data["title"]
    if "price" in json_data:
        product.price = json_data["price"]
    if "description" in json_data:
        product.description = json_data["description"]
    if "image" in json_data:
        product.image = json_data["image"]

    session.commit()

    return {"status": "updated", "product": product.to_dict()}




