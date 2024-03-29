import LinkExternal from '@/components/linkExternal/LinkExternal';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-4 my-40">
              <div>
                <h1 className="text-6xl">Servus! Ich bin Max.</h1>
              </div>
              <div>
                <h2 className="text-4xl mb-5">Ich bin hier, um deine digitale Experience aufzuleveln!</h2>
                <p className="text-xl">Passioniert für komplizierte Situationen, schwierige Probleme und digitale Experiences</p>
                  <div className="mt-5">
                    <button className="btn btn-primary me-3">Sprich mich an!</button>
                    <button className="btn btn-outline btn-primary">Arbeit ansehen</button>
                  </div>
              </div>
          </div>
        </div>
      </section>

      <section className='py-10 bg-indigo-600 text-white'>
        <div className="container mx-auto">
          <h2 className='text-2xl mb-6'>Über diese Website:</h2>
          <p className='text-xl'>
            Hi! Ich baue diese Website in aller Öffentlichkeit, um mich in das Framework Next.js einzuarbeiten. Bitte verzeih mir, falls hier Dinge kaputt sind, und/oder Content fehlt. =)
          </p>
        </div>
      </section>

      <section className="bg-slate-200 py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h2 className="text-xl font-bold mb-10">Aktuelle Projekte:</h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold">Rupp + Hubrach Optik GmbH, Bamberg // Reize Optik Ag, Trimbach (Schweiz)</h3>
                <div className="my-3">
                  <div className="badge badge-accent me-3">Projektleitung</div>
                  <div className="badge badge-accent me-3">Product Ownership</div>
                  <div className="badge badge-accent me-3">UiUx Design</div>
                </div>
                <p>Entwicklung einer digitalen Preisliste. Geteiltes Projekt zweier Companies. Rollout über 5+ Länder in Europa.</p>
                <div className="divider"></div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold">Anonyme Fortune 500 Company</h3>
                <div className="my-3">
                  <div className="badge badge-accent me-3">Projektleitung</div>
                  <div className="badge badge-accent me-3">Product Management Consulting</div>
                  <div className="badge badge-accent me-3">Release Management</div>
                </div>
                <p>Relaunch einer Legacy-Applikation mit 2Mio+ Benutzer:innen im Support-Umfeld des Unternehmens.</p>
                <div className="divider"></div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold">Alcedis Gmbh in Gießen</h3>
                <div className="my-3">
                  <div className="badge badge-accent me-3">Projektleitung</div>
                  <div className="badge badge-accent me-3">Website Development</div>
                  <div className="badge badge-accent me-3">UiUx Design</div>
                  <div className="badge badge-accent me-3">Digital Sales & Marketing</div>
                </div>
                <p>Entwicklung einer großen Corporate Website mit 10.000+ monatlichen Besucher:innen.</p>
                <div className="divider"></div>
              </div>

            </div>

            <div>
              <h2 className="text-xl font-bold mb-10">Beteiligungen:</h2>

              <div className="mb-8">

                <Image
                  src="/space four_RGB_schwarz.svg"
                  width={250}
                  height={250}
                  alt="Logo der Digitalagentur Space Four aus bamberg"
                />

                <div className="my-8">
                  <p>Space Four ist eine Full-Service Digitalagentur. Wir spezialisieren uns auf die Entwicklung von Softwareprodukten für das Web. Unsere Stärke liegt in überragendem UiUx-Design, tiefem Product-Wissen und einer analytischen Arbeitsweise.</p>
                </div>
                <LinkExternal target="https://www.space-4.de" label="Space Four besuchen" />

                <div className="divider"></div>
              </div>

              <div className="mb-8">

                <Image
                  src="/trialytix_logo.png"
                  width={250}
                  height={250}
                  alt="Logo der Digitalagentur Space Four aus bamberg"
                />

                <div className="my-8">
                  <p>Trialytix ist eine leistungsstarke Controlling-Suite, welche spezifisch für die Bedürfnisse der klinischen Forschung entwickelt wurde. Nach erfolgreichem Going-to-Market sind wir nun dabei die Operations und Salesaktivitäten zu skalieren.</p>
                </div>
                <a className='link'>Trialytix besuchen</a>
                <div className="divider"></div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
