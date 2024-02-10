from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from datetime import datetime
import uuid

app = FastAPI()

livres = []
pages = []
utilisateurs = []

class Livre(BaseModel):
    id: str = None
    titre: str
    resume: str = ""
    image: str = ""
    createdAt: datetime = None
    updatedAt: datetime = None

class Page(BaseModel):
    id: str = None
    contenu: str
    createdAt: datetime = None
    updatedAt: datetime = None
    livreId: str

class Utilisateur(BaseModel):
    id: str = None
    prenom: str
    nom: str = ""
    email: str
    motDePasse: str
    role: str = "user"

@app.get("/livres", response_model=List[Livre])
def get_livres():
    return livres

@app.post("/livres", response_model=Livre)
def create_livre(livre: Livre):
    livre.id = str(uuid.uuid4())
    livre.createdAt = datetime.now()
    livre.updatedAt = datetime.now()
    livres.append(livre)
    return livre

@app.get("/livres/{livre_id}/pages", response_model=List[Page])
def get_pages(livre_id: str):
    livre = next((livre for livre in livres if livre.id == livre_id), None)
    if livre is None:
        raise HTTPException(status_code=404, detail="Livre non trouvé")
    livre_pages = [page for page in pages if page.livreId == livre_id]
    return livre_pages

# Autres endpoints pour les pages, utilisateurs, etc.

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
