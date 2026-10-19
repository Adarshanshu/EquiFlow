import Footer from "../Footer";
import Hero from "./Hero";
import Universe from "./Universe";
import "./products.css";

const products = [
  {
    name: "Kite",
    image: "media/images/kite.png",
    description: "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
    links: [{ label: "Try demo", href: "/signup" }, { label: "Learn more", href: "#investment-offerings" }],
    apps: true,
  },
  {
    name: "Console",
    image: "media/images/console.png",
    description: "The central dashboard for your EquiFlow account. Gain insights into your trades and investments with in-depth reports and visualisations.",
    links: [{ label: "Learn more", href: "#investment-offerings" }],
  },
  {
    name: "Coin",
    image: "media/images/coin.png",
    description: "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
    links: [{ label: "Get started", href: "/signup" }],
    apps: true,
  },
  {
    name: "Kite Connect API",
    image: "media/images/kiteconnect.png",
    description: "Build powerful trading platforms and experiences with our simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our client base.",
    links: [{ label: "Kite Connect", href: "https://kite.trade/" }],
  },
  {
    name: "Varsity mobile",
    image: "media/images/varsity.png",
    description: "An easy to grasp collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
    links: [{ label: "Explore learning resources", href: "/suport" }],
  },
];

function ProductRow({ product, index }) {
  return (
    <section className={`product-row${index % 2 ? " product-row-reverse" : ""}`}>
      <div className="product-visual">
        <img src={product.image} alt={`${product.name} platform`} loading="lazy" />
      </div>
      <div className="product-copy">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="product-links">
          {product.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}<span aria-hidden="true">→</span>
            </a>
          ))}
        </div>
        {product.apps && (
          <div className="product-apps" aria-label={`${product.name} mobile apps`}>
            <a href="https://play.google.com/store/search?q=EquiFlow%20investing&c=apps" target="_blank" rel="noreferrer" aria-label="Search on Google Play"><img src="media/images/googlePlayBadge.svg" alt="Get it on Google Play" /></a>
            <a href="https://apps.apple.com/in/search?term=EquiFlow" target="_blank" rel="noreferrer" aria-label="Search on the App Store"><img src="media/images/appstoreBadge.svg" alt="Download on the App Store" /></a>
          </div>
        )}
      </div>
    </section>
  );
}

export default function ProductPage() {
  return (
    <div className="products-page">
      <main>
        <Hero />
        <div className="products-list">
          {products.map((product, index) => <ProductRow key={product.name} product={product} index={index} />)}
        </div>
        <Universe />
        <section className="products-cta">
          <h2>Open an account to get started</h2>
          <p>Modern platforms and investment products to help you build your financial future.</p>
          <a href="/signup">Sign up for free <span aria-hidden="true">→</span></a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
