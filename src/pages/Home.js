import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingModal from './BookingModal'; // Make sure this path is correct

const Home = () => {
  const navigate = useNavigate();
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div>
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant focused on traditional
            recipes served with a modern twist.
          </p>
          <button onClick={() => setShowBooking(true)}><strong>Reserve a Table</strong></button>
        </div>
        <div className="hero-image">
          <img src="/images/hero.jpg" alt="Delicious food" />
        </div>
        {showBooking && <BookingModal onClose={() => setShowBooking(false)} />}
      </section>

      <section id="specials" class="specials-section">
  <h2 class="specials-title">Specials</h2>
  <p class="specials-subtitle"><b>Fresh, flavorful, and handpicked every week.</b></p>
  <p class="specials-offer"><b>We are offering our today's menu on 10% discount!!</b></p>
</section>


      <section id="menu">
        <h2>Menu</h2>
        <div className="menu-grid">
          <div className="menu-item">
            <img id="salad" src="/images/salad.jpg" alt="Greek Salad" />
            <h3><strong>Greek Salad</strong></h3>
            <p>
              A refreshing blend of crisp romaine lettuce, ripe tomatoes, cucumbers, kalamata olives,
              and creamy feta cheese. Dressed in a house-made olive oil vinaigrette with a hint of
              lemon and herbs. This dish is perfect as a light lunch or an appetizer to start your meal.
            </p>
            <p><strong>$9.99</strong></p>
          </div>

          <div className="menu-item">
            <img id="bruschetta" src="/images/bru.jpg" alt="Bruschetta" />
            <h3><strong>Bruschetta</strong></h3>
            <p>
              Traditional Italian grilled bread, rubbed with garlic and topped with vine-ripened
              tomatoes, basil, and a drizzle of extra virgin olive oil. Our bruschetta bursts with
              bold, fresh flavors in every bite. Ideal for sharing before your entrée.
            </p>
            <p><strong>$7.99</strong></p>
          </div>

          <div className="menu-item">
            <img id="fish" src="/images/fish.jpg" alt="Grilled Fish" />
            <h3><strong>Grilled Fish</strong></h3>
            <p>
              Fresh-caught fish seasoned with sea salt and cracked pepper, grilled over open flame
              and finished with a lemon butter glaze. Served with a side of sautéed vegetables and
              herb rice. Light, healthy, and full of flavor — a house specialty!
            </p>
            <p><strong>$17.99</strong></p>
          </div>

          <div className="menu-item">
            <img id="dessert" src="/images/dessert.jpg" alt="Lemon Dessert" />
            <h3><strong>Lemon Dessert</strong></h3>
            <p>
              A zesty lemon tart with a buttery shortbread crust, topped with whipped cream and
              freshly grated lemon zest. It’s the perfect ending to your Mediterranean meal — sweet,
              tangy, and delightfully indulgent.
            </p>
            <p><strong>$6.49</strong></p>
          </div>
        </div>
      </section>

      <section id="chicago">
        <h2>About Our Restaurant in Chicago</h2>
        <div className="chicago-section">
          <img id="restaurant-interior" src="/images/restaurant.jpg" alt="Restaurant interior" />
          <div className="chicago-text">
            <p>
              Nestled in the heart of Chicago, Little Lemon brings the vibrant flavors of the Mediterranean
              to your plate. We are a family-run establishment with a deep passion for tradition and taste.
            </p>
            <p>
              Our chefs source only the freshest local ingredients to create wholesome and unforgettable dishes.
              Whether you’re here for a quick lunch or a full-course dinner, every meal is made with love and precision.
            </p>
            <p>
              Step into our cozy dining space where rustic charm meets modern elegance. From our friendly staff
              to the warm aromas wafting from the kitchen — we invite you to experience Mediterranean hospitality.
            </p>
          </div>
        </div>
      </section>

      <section id="about">
        <p>📧 contact@littlelemon.com</p>
        <p>📞 (123) 456-7890</p>
        <p>🌍 123 Mediterranean Lane, Chicago, IL</p>
      </section>

      <footer>
        <p>&copy; 2025 Little Lemon. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

