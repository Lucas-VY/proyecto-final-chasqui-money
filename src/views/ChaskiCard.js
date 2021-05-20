import Sidebar from "../components/Sidebar";
import '../css/ChaskiCard.css';

const ChaskiCard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-xl-2 px-0">
            <Sidebar />
          </div>


          <div className="col-12 col-md-9 mt-5 px-5">
            {/* BODY AQUI */}
            
              <h1 className="text-center text-white">PROXIMAMENTE</h1>
            <div className="Wrap">
        <style>
          {/* .a {
            "fill": "#fff"
          } */}
        </style>
        <div className="Base">
          <div className="Inner-wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="Logo-name"
              width="299"
              height="56"
            >
              <path
                d="M261.9 0.3C260.9 0.3 260 1.1 260 2.2L260 15.8 295.9 15.8 279.6 0.3 261.9 0.3"
                className="a"
              />
              <path
                d="M297.2 19.9C297.2 18.9 296.4 18 295.3 18L281.7 18 281.7 53.9 297.2 37.6 297.2 19.9"
                className="a"
              />
              <path
                d="M277.6 55.2C278.6 55.2 279.5 54.4 279.5 53.3L279.5 39.7 243.6 39.7 259.9 55.2 277.6 55.2"
                className="a"
              />
              <path
                d="M242.3 35.6C242.3 36.7 243.1 37.5 244.2 37.5L257.8 37.5 257.8 1.6 242.3 18 242.3 35.6"
                className="a"
              />
              <path
                d="M77.5 6.8L77.5 23.4 54.4 23.4 54.4 6.8 46 6.8 46 48.7 54.4 48.7 54.4 30.7 77.5 30.7 77.5 48.7 86 48.7 86 6.8 77.5 6.8"
                style={{"fillStroke": "none", "fill": "#fff"}}
              />
              <path
                d="M189.6 6.8L189.6 48.7 226.5 48.7 221.8 41.3 198 41.3 198 30.7 221.1 30.7 221.1 23.6 198 23.6 198 14 221.8 14 226.4 6.8 189.6 6.8"
                className="a"
              />
              <path
                d="M14.7 6.8C5.9 6.8 1.5 12.2 1.5 19.9L1.5 35.5C1.5 44.5 7.2 48.7 14.6 48.7L41 48.7 36.1 41 16.3 41C12 41 10.2 39.5 10.2 34.8L10.2 20.6C10.2 16 11.7 14.2 16.4 14.2L36.4 14.2 41.1 6.8 14.7 6.8"
                className="a"
              />
              <path
                d="M152.6 6.8C147.5 6.8 142.4 9.9 142.4 17.7L142.4 19.7C142.4 27.8 147.4 31 152.3 31L169.9 31C171.7 31 173.2 31.3 173.2 34.4L173.2 37.9C173.1 40.7 171.7 41.3 169.8 41.3L146.8 41.3 142 48.7 170.3 48.7C177.2 48.7 181.8 45.3 181.8 37.4L181.8 34.5C181.8 27 177.5 23.4 170.8 23.4L154.1 23.4C152.2 23.4 150.9 22.9 150.9 20.1L150.9 17.2C150.9 14.9 151.8 14 154 14L175.9 14 180.5 6.8 152.6 6.8"
                className="a"
              />
              <path
                d="M110.4 6.8L90.6 48.7 100 48.7 103.8 40 125.4 40 129.2 48.7 138.7 48.7 118.8 6.8 110.4 6.8zM114.6 15.5L122.2 32.9 107 32.9 114.6 15.5"
                className="a"
              />
              </svg>
              
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="Logo"
              viewBox="0 0 97.8 97.1"
            >
              <path
                className="Logo"
                d="M31.5 0.1c11.9 0.1 20.4 0 32.2 0 1.6 0 3.6-0.3 4.9 0 1.1 0.3 2.7 2.5 3.7 3.5C80.6 12.1 89 20.2 97.1 28.7c-21.2-0.1-47.1 0.2-65.8-0.1 -0.1-8.5-0.2-18.5 0-28C31.3 0.3 31.4 0.2 31.5 0.1z"
              />
              <path
                className="Logo"
                d="M28.8 66c-8.5-0.1-19.5 0.2-28.4-0.1 -0.2-8.3-0.1-18.3-0.1-27.7 0-2.7-0.6-6.9 0-9.3 0.2-0.8 2.4-2.7 3.4-3.7 8-8.3 17.3-17 25-24.8 0.1 0 0.1 0 0.1 0.1C28.7 24.7 29 43.8 28.8 66z"
              />
              <path
                className="Logo"
                d="M69.4 30.9c9.5 0.1 18.9-0.2 28 0.1 0.1 9 0.2 17.4 0.1 27.3 0 2.6 0.6 6.9 0 9.6 -0.3 1.2-2.5 2.7-3.5 3.7 -8.2 8.5-16.7 16.8-24.9 24.7 -0.2-18.6-0.1-42.9-0.1-65.1C69.1 31.1 69.2 31 69.4 30.9z"
              />
              <path
                className="Logo"
                d="M66.5 68.2c0.3 9.8 0.3 19.1 0 28.5 -10.1 0.2-19-0.1-28.3 0.1 -2.4 0.1-6.7 0.6-9.1-0.1 -0.8-0.2-2.7-2.3-3.7-3.4 -8.1-8-17-16.9-24.6-24.7 -0.1-0.1-0.1-0.2-0.1-0.4 0.1 0 0.1-0.1 0.2-0.1C23.2 68.2 44.1 68.2 66.5 68.2z"
              /></svg>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="Chip"
              viewBox="0 0 387.8 380.3"
            >
              <style type="text/css">

              </style>
              <defs>
                <linearGradient x2="100">
                  <stop offset="0%" stop-color="#c79750" />
                  <stop offset="20%" stop-color="#e6b964" />
                  <stop offset="50%" stop-color=" #f8e889" />
                  <stop offset="80%" stop-color=" #deb15f" />
                  <stop offset="100%" stop-color=" #dfb461" />
                </linearGradient>
              </defs>
              <path
                className="st0"
                d="M308.8 375.3H79.1C38.2 375.3 5 342.1 5 301.2V79.1C5 38.2 38.2 5 79.1 5h229.7c40.9 0 74.1 33.2 74.1 74.1v222.2C382.8 342.1 349.7 375.3 308.8 375.3z"
              />
              <line className="st0" x1="109.9" y1="5.1" x2="109.9" y2="375.1" />
              <line className="st0" x1="4.9" y1="95.1" x2="109.9" y2="95.1" />
              <line className="st0" x1="4.9" y1="185.1" x2="109.9" y2="185.1" />
              <line className="st0" x1="1.9" y1="275.1" x2="106.9" y2="275.1" />
              <line className="st0" x1="276.9" y1="275.1" x2="381.9" y2="275.1" />
              <line className="st0" x1="274.9" y1="185.1" x2="379.9" y2="185.1" />
              <line className="st0" x1="277.9" y1="95.1" x2="382.9" y2="95.1" />
              <path
                d="M277.4 90.1h-1c-2.5 0-4.5 2-4.5 4.5v272c0 2.5 2 4.5 4.5 4.5h1c2.5 0 4.5-2 4.5-4.5v-272C281.9 92.1 279.9 90.1 277.4 90.1z"
              />
            </svg>
            <div className="Card-number">
              <ul id="lista-tarjeta">
                <li id="lista-card">4351</li>
                <li id="lista-card">8237</li>
                <li id="lista-card">2189</li>
                <li id="lista-card">0104</li>
              </ul>
            </div>
            <div className="Expire">
              <h4>Good Thru</h4>
              <p id="fechas-tarjeta">02&#x2F;20</p>
            </div>
            <div className="Name"><h3>John Doe</h3></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="Visa"
              width="1000"
              height="324"
              viewBox="0 0 1000 323.7"
            >
              <g
                transform="matrix(4.4299631 0 0 4.4299631 -81.165783 -105.04783)"
              >
                <polygon
                  points="116.1 95.7 97.9 95.7 109.3 25 127.6 25 "
                  fill="#f2f2f2"
                />
                <path
                  d="m182.4 26.7c-3.6-1.4-9.3-3-16.4-3-18.1 0-30.8 9.6-30.9 23.4-0.1 10.2 9.1 15.8 16 19.2 7.1 3.5 9.5 5.7 9.5 8.8-0.1 4.7-5.7 6.9-11 6.9-7.3 0-11.2-1.1-17.2-3.8l-2.4-1.1-2.6 15.9c4.3 2 12.2 3.7 20.4 3.8 19.2 0 31.7-9.5 31.8-24.2 0.1-8.1-4.8-14.2-15.3-19.3-6.4-3.2-10.3-5.4-10.3-8.7 0.1-3 3.3-6.1 10.5-6.1 5.9-0.2 10.3 1.3 13.6 2.7l1.7 0.8 2.5-15.3 0 0z"
                  className="a"
                />
                <path
                  d="m206.7 70.7c1.5-4.1 7.3-19.8 7.3-19.8-0.1 0.2 1.5-4.1 2.4-6.8l1.3 6.1c0 0 3.5 16.9 4.2 20.5-2.9 0-11.6 0-15.2 0l0 0zm22.6-45.7-14.1 0c-4.4 0-7.7 1.3-9.6 5.9l-27.2 64.9 19.2 0c0 0 3.2-8.7 3.8-10.6 2.1 0 20.8 0 23.5 0 0.5 2.5 2.2 10.6 2.2 10.6l16.9 0-14.8-70.7 0 0z"
                  className="a"
                />
                <path
                  d="M82.6 25 64.7 73.2 62.7 63.4C59.4 52.2 49 39.9 37.4 33.8l16.4 61.8 19.3 0 28.7-70.6-19.3 0 0 0z"
                  className="a"
                />
                <path
                  d="m48 25-29.4 0-0.3 1.4c23 5.9 38.2 20 44.4 37L56.3 30.9c-1.1-4.5-4.3-5.8-8.3-5.9l0 0z"
                  className="a"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>

            </div>
        </div>
      </div>
    </>
  );
};

export default ChaskiCard;
