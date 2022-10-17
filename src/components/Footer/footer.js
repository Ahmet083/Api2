import FooterMenu from "./FooterComponents/FooterMenu"




function Footer() {

  return (
    <div>

      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img className="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" />
            <small className="d-block mb-3 text-muted">© 2017-2018</small>
          </div>

          <div className="col-6 col-md">
            <FooterMenu title="Hakkimizda" menu={['Vizyonumuz', 'Misyonumuz', 'Calismalarimiz']} />
          </div>

          <div className="col-6 col-md">
            <FooterMenu title="Servisler" menu={['Musteri Hizmetleri ', 'Urun Kabul servisi', 'Urun teslim Servisi']} />
          </div>
          <div className="col-6 col-md">
            <FooterMenu title="Kategoriler" menu={['Mutfak Bolumu', 'Galeri Bolumu', 'Tamirat Bolumu']} />
          </div>



        </div>
      </footer>

    </div>

  )
}

export default Footer