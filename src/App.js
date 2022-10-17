import Footer from "./components/Footer/footer"
import FooterMenu from "./components/Footer/FooterComponents/FooterMenu";
import Header from "./components/header/header"


function App() {
  return (
   <div>
     <Header />
   

<div className="container-sm">
      <div className="row row-cols-3 card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Free</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Pro</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">Enterprise</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>30 users included</li>
            <li>15 GB of storage</li>
            <li>Phone and email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" className="btn btn-lg btn-block btn-primary">Contact us</button>
        </div>
      </div>

        <table className="table text-center">
        <thead>
          <tr>
            <th style={{width:"34%"}}></th>
            <th style={{width:"22%"}}>Free</th>
            <th style={{width:"22%"}}>Pro</th>
            <th style={{width:"22%"}}>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="text-start">Public</th>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Private</th>
            <td></td>
            <td><svg cclassName="bi" width="24" height="24"><use href="#check"></use></svg></td>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <th scope="row" className="text-start">Permissions</th>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Sharing</th>
            <td></td>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
            <td><svg cclassName="bi" width="24" height="24"><use href="#check"></use></svg></td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Unlimited members</th>
            <td></td>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Extra security</th>
            <td></td>
            <td></td>
            <td><svg className="bi" width="24" height="24"><use href="#check"></use></svg></td>
          </tr>
        </tbody>
      </table>
       
      </div>
      
   <Footer />
     
    </div>

</div>
  );
}

export default App;
