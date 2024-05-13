export const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="mx-auto max-w-screen-lg px-6">
        <div className="flex flex-col justify-between gap-4 py-12 lg:flex-row lg:items-center">
          <div>
            <h2 className="mb-4 font-serif text-2xl">Connie</h2>
            <ul>
              <li>
                <p>
                  <a className="hover:underline" href="mailto:connie@connie.com">
                    connie@connie.com
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="tel:004747904470">+47 479 04 470</a>
                </p>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-12">
            <div>
              <h2 className="mb-4 font-serif text-xl">For studenter</h2>
              <ul>
                <li>
                  <p>
                    <a className="hover:underline" href="/login">
                      Logg inn
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a className="hover:underline" href="/register">
                      Registrer deg
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-serif text-xl">For bedrifter</h2>
              <ul>
                <li>
                  <p>
                    <a className="hover:underline" href="/bedrift">
                      Les mer
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a className="hover:underline" href="/bedrift/register">
                      Registrer deg
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-serif text-xl">Om oss</h2>
              <ul>
                <li>
                  <p>
                    <a className="hover:underline" href="/om-oss">
                      Les mer
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8">© 2024 Connie. Alle rettigheter reservert.</p>
      </div>
    </footer>
  );
};
