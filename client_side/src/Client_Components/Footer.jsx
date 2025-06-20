const Footer = () => {
  return (
    <div>
      <footer
        className="footer footer-horizontal footer-center text-primary-content p-10"
        style={{ backgroundColor: "#393E46" }}
      >
        <aside>
          <img
            src="/wtalogo1.ico"
            alt="Company Logo"
            width="60"
            height="60"
            className="inline-block"
          />
          <p className="font-bold">
            © {new Date().getFullYear()} Wild Tracks Nepal - Himalayan Motorbike
            Journeys
          </p>
          <p style={{ lineHeight: "1.8" }}>
            PO Box 21087, Baluwatar, Kathmandu, Nepal.
            <br />
            Tel. +977.1.4439590 Mobile: 9851054001 Email:
            info@wildtracksnepal.com
            <br />
            Company Registration No: 89980/068/069
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://x.com/WildTracksNepal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCF44YIM1p6Pj5SYvvNRYuzA?view_as=subscriber"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a
              href="https://facebook.com/WildTracksNepal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/wildtracksnepal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="fill-current"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
              </svg>
            </a>
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g293890-d6696340-Reviews-Wild_Tracks_Nepal_Himalayan_Moto_Journeys-Kathmandu_Kathmandu_Valley_Bagmati_Zone.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TripAdvisor"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="24"
                height="24"
                fill="currentColor"
                className="fill-current"
              >
                <path d="M16 8C8.82 8 3 13.06 3 19.42 3 24 6.58 27 11.26 27c3.1 0 5.8-1.62 7.3-4.2C20.94 25.4 24.2 27 27 27c4.68 0 8-3 8-7.58C35 13.06 29.18 8 22 8c-1.6 0-3.12.32-4.46.92C16.12 8.32 14.6 8 13 8zM7 19.5c0-1.93 1.57-3.5 3.5-3.5S14 17.57 14 19.5 12.43 23 10.5 23 7 21.43 7 19.5zm13-7.5c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm3.5 7.5c0-1.93-1.57-3.5-3.5-3.5S17 17.57 17 19.5 18.57 23 20.5 23 23 21.43 23 19.5z" />
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
