import React from "react";

const topics = [
  {
    title: "Account opening",
    links: ["Resident individual", "Minor", "Non-resident Indian (NRI)", "Company, partnership, HUF and LLP", "Glossary"],
  },
  {
    title: "Your EquiFlow account",
    links: ["Your profile", "Account modification", "Client Master Report (CMR) and Depository Participant (DP)", "Nomination", "Transfer and conversion of securities"],
  },
  {
    title: "Console",
    links: ["Portfolio", "Corporate actions", "Funds statement", "Reports", "Profile", "Segments"],
  },
];

const CreateTicket = () => (
  <main className="support-topics">
    <h2>To create a ticket, select a relevant topic</h2>
    <div className="support-topic-grid">
      {topics.map(({ title, links }) => (
        <section className="support-topic-card" key={title}>
          <h3>{title}</h3>
          <ul>{links.map((label) => <li key={label}><a href="/suport">{label}</a></li>)}</ul>
        </section>
      ))}
    </div>
  </main>
);

export default CreateTicket;
