const Account = () =>{

      return (
      <div className="Account_user">

<div className="container mt-4">
      <h2>Inscription aux formations</h2>


      <form  className="p-4 border rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Nom :</label>
          <input
            type="text"
            className="form-control"
            name="name"
        
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email :</label>
          <input
            type="email"
            className="form-control"
          
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mot de passe :</label>
          <input
            type="password"
            className="form-control"
            name="password"
       
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Type de formation :</label>
          <select
            className="form-control"
            name="courseType"
       
          >
            <option value="en ligne">Formation en ligne</option>
            <option value="presentiel">Présentiel</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">S'inscrire</button>
      </form>
    </div>






      </div>


)}


export default Account;