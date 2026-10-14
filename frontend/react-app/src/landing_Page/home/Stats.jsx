import React from "react";

const Stats = () => {
  return (
    <div>
      <div className="container p-5" style={{ marginBottom: "8rem" }}>
        <div className="row p-5">
          <div className="col-6 p-5">
            <h1 className="fs-xl mb-12 text-muted">Trust with confidence</h1>
            <h2 className="fs-lg text-muted">Customer-first always</h2>
            <p className="mb-12 " style={{ width: "75%" }}>
              That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
            <h2 className="fs-lg text-muted">No spam or gimmicks</h2>
            <p className="mb-12 " style={{ width: "75%" }}>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.{" "}
              <a href="#">Our philosophies.</a>
            </p>
            <h2 className="fs-lg text-muted">The Zerodha universe</h2>
            <p className="mb-12 " style={{ width: "75%" }}>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h2 className="fs-lg text-muted">Do better with money</h2>
            <p className="mb-12 " style={{ width: "75%" }}>
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col-6 p-5">
            <img src="media/images/ecosystem.png" style={{ width: "90%" }} />
            <div className="text-center">
              <a href="" className="mx-5" style={{ textDecoration: "none" }}>
                Explore our products{" "}
                <i class="fa-solid fa-arrow-right-long"></i>
              </a>
              <a href="" style={{ textDecoration: "none" }}>
                Try Kite <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
