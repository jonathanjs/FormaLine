import { useState } from "react";


const Register = () =>{


    
    const [formData, setFormData] = useState({

        nom: '',
        email:'',
        password: '',
        courseType: "en ligne",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
      };

      // Validation et soumission du formulaire
  
      const [errors, setErrors] = useState("");


      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Empêche le rechargement de la page
        e.preventDefault();

    if (!formData.nom || !formData.email || !formData.password) {
      setErrors("Tous les champs sont obligatoires !");
      return;
    }

    // Envoi des données (simulation console.log, à remplacer par une API)
    console.log("Utilisateur inscrit :", formData);
    alert("Compte créé avec succès !");
    
    // Réinitialiser le formulaire
    setFormData({ nom: "", email: "", password: "", courseType: "en ligne" });
    setErrors("");




        console.log("Données soumises :", formData); // Gérer la soumission



      };


    return (
    <div className="Account_user">

    <div className="container mt-4">
    <div className="row">
    <h2>Inscription aux formations</h2>
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-light" >
      <div className="mb-3">
        <label className="form-label">Nom :</label>
        <input
          type="text"
          className="form-control"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email :</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Mot de passe :</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Type de formation :</label>
        <select
          className="form-control"
          name="courseType"
          value={formData.courseType}
       
        >
          <option value="en ligne">Formation en ligne</option>
          <option value="presentiel">Présentiel</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary w-100">S'inscrire</button>
    </form>

    { errors && <p className="bg-danger"> { errors}</p>}
  </div>





  </div>
    </div>


)}


export default Register;