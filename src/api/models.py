from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

likes = db.Table('likes',
    db.Column('question_id', db.Integer, db.ForeignKey('question.id'), primary_key=True),
    db.Column('interviewer_id', db.Integer, db.ForeignKey('interviewer.id'), primary_key=True),
)

dislikes = db.Table('dislikes',
    db.Column('interviewer_id', db.Integer, db.ForeignKey('interviewer.id'), primary_key=True),
    db.Column('question_id', db.Integer, db.ForeignKey('question.id'), primary_key=True)
)

trolls = db.Table('trolls',
    db.Column('interviewer_id', db.Integer, db.ForeignKey('interviewer.id'), primary_key=True),
    db.Column('question_id', db.Integer, db.ForeignKey('question.id'), primary_key=True)
)


class User(db.Model):
    id = db.Column(db.Integer, unique=True, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    username = db.Column(db.String(120), unique=True, nullable=False)
    rol_id = db.Column(db.Integer, db.ForeignKey('rol.id'),
        nullable=False)
    question_id = db.Column(db.Integer, db.ForeignKey('question.id'),
        nullable=True)
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "role": self.role,
   }

class Rol(db.Model):
    id = db.Column(db.Integer, unique=True, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    user = db.relationship('User', backref='rol', lazy=True)

    

    def __repr__(self):
        return f'<Rol {self.name}>'

    def serialize(self):  # do not serialize the password, its a security breach
        return {
            "id": self.id,
            "name": self.name,

   }


class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(350), nullable=False)
    likes = db.relationship('Interviewer', secondary=likes, lazy='subquery',)
    dislikes = db.relationship('Interviewer', secondary=dislikes, lazy='subquery',)
    trolls = db.relationship('Interviewer', secondary=trolls, lazy='subquery',)
    interviewer_id = db.Column(db.Integer, db.ForeignKey('interviewer.id'),
        nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'),nullable=False)
    user = db.relationship('User', backref='question', lazy=True)

    def __repr__(self):
        return f'<Question {self.text}>'

    def serialize (self):
        return {
            "id": self.id,
            "text": self.text,
        }

class Interviewer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    tag = db.Column(db.String(80), nullable=True)
    questions = db.relationship('Question', backref='interviewer', lazy=True)

    def __repr__(self):
        return f'<Interviewer {self.name}>'

    def serialize (self):
        return {
            "id": self.id,
            "name": self.name,
            "tag": self.tag,
        }

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    question = db.relationship('Question', backref='category', lazy=True)

    def __repr__(self):
        return f'<Category {self.name}>'

    def serialize (self):
        return {
            "id": self.id,
            "name": self.name,
        }

