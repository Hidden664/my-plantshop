import React from 'react';
import { Link } from 'react-router-dom';


export default function Landing() {
return (
<div className="landing">
<div className="landing-bg" />
<div className="landing-content">
<h1>PlantShop — Green up your home</h1>
<p>We sell a curated selection of houseplants for beginners and plant lovers.</p>
<Link to="/products" className="btn primary">Get Started</Link>
</div>
</div>
);
}