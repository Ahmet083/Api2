


function FooterMenu (props) {

  console.log('FooterMenuProps', props)

  const footerMenu = props.menu.map((item, index) => {
    console.log('footerMenuItem', item)
    return(
      <li className="mb-1" key={ index }>
      <a className="link-secondary text-decoration-none" 
      href="#">
      {item}
      </a>
      </li>  

    )
  })

    return (
        <div>
        <div className="col-6 col-md">
            <h5>
            {props.title}
            </h5>
            <ul className="list-unstyled text-small">
              {footerMenu}
            </ul>
          </div>
        
        </div>
    )
}

export default FooterMenu