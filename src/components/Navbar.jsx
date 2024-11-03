import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { supabase } from "./ItemListContainer";

const Navbar = () =>{
    
    const [categories, setCategories] = useState([])
    const fetchCategories = async () => {
        const { data } = await supabase.from("product_categories").select('*');
        setCategories(data);
    };

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <nav className="navbar">
            <Link to="/" className="logo"><h1>Mi tiendita</h1></Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                {categories.map((category) => <li><Link className="menu-link" to={`/productos/${category.slug}`}>{category.nombreCategoria}</Link></li>)}
                <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
                <li><CartWidget/></li>
            </ul>
        </nav>
    )
}

export default Navbar