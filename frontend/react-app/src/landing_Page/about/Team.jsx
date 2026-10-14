import React from 'react'

const Team = () => {
  return (
    <section
      className="container"
      style={{ maxWidth: '1120px', margin: '70px auto', padding: '0 24px' }}
    >
      <h1
        style={{
          margin: '0 0 70px',
          textAlign: 'center',
          fontSize: '32px',
          fontWeight: 400,
          color: '#424242',
        }}
      >
        Founder
      </h1>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          rowGap: '36px',
        }}
      >
        <div
          style={{
            flex: '0 0 40%',
            minWidth: '280px',
            padding: '0 24px',
            boxSizing: 'border-box',
            textAlign: 'center',
          }}
        >
          <img
            src="/media/images/profile-photo.jpg"
            alt="Adarsh"
            style={{
              width: 'min(100%, 370px)',
              aspectRatio: '1',
              objectFit: 'cover',
              objectPosition: 'center 30%',
              borderRadius: '50%',
            }}
          />
          <h2
            style={{
              margin: '24px 0 22px',
              fontSize: '24px',
              fontWeight: 400,
              color: '#424242',
            }}
          >
            Adarsh maurya
          </h2>
          <p style={{ margin: 0, fontSize: '18px', color: '#666' }}>
            Founder, CEO
          </p>
        </div>

        <div
          style={{
            flex: '1 1 60%',
            minWidth: '300px',
            padding: '0 24px',
            boxSizing: 'border-box',
            color: '#424242',
            fontSize: '20px',
            lineHeight: 1.8,
            transform: 'translateY(-20px)',
          }}
        >
          <p style={{ margin: 0 }}>
            I’m Adarsh, a developer currently pursuing my B.Tech and building
            projects that challenge me to think like an engineer. I love solving
            algorithmic problems and translating that logic into full-stack
            applications. Over time, I’ve worked with JavaScript, React, Tailwind
            CSS, Redux, and Next.js, and I enjoy experimenting with these tools
            to create clones of platforms like Zerodha and Airbnb.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Team
