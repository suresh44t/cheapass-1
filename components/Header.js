import c from '../palette/three';

export default () => (
  <div className="wrapper soft-padding--top">
    <header>
      <div>
        <img
          src="https://cheapass.in/images/fe9a0762.cheapass.png"
          alt="logo"
        />
      </div>
      <div>
        <ul>
          <li><a href="">Download for iOS</a></li>
          <li><a href="">Download for Android</a></li>
          <li><a href="">Bookmarklet</a></li>
          <li><a href="">Signin</a></li>
        </ul>
      </div>
    </header>
    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      img {
        width: 134px;
      }
      ul > li {
        display: inline-block;
        margin-right: 0.5rem;
      }
      ul > li > a {
        display: block;
        padding: 0.25rem 0.5rem;
      }
    `}</style>
  </div>
)
