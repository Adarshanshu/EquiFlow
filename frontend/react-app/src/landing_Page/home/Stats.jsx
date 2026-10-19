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
              EquiFlow brings your investing tools together in one place, with
              clear portfolio views and a straightforward trading experience.
            </p>
            <h2 className="fs-lg text-muted">No spam or gimmicks</h2>
            <p className="mb-12 " style={{ width: "75%" }}>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.{" "}
              <a href="#">Our philosophies.</a>
            </p>
            <h2 className="fs-lg text-muted">The EquiFlow ecosystem</h2>
            <p className="mb-12 " style={{ width: "75%" }}>
              Explore products and services designed to support your investing
              journey, from trading tools to market education.
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
