import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const stats = [
  { label: 'Experience', value: '11 years' },
  { label: 'Team building', value: '40+ hires' },
  { label: 'Fundraising', value: '$12m' },
  { label: 'Language of choice', value: 'TypeScript' },
]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joshua Kelly</title>
        <meta name="description" content="Joshua Kelly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h1 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                Joshua Kelly
              </h1>
              <h2 className="text-xl text-gray-700 tracking-wide mt-2">
                YC Founder &amp; CTO @ <a href="https://www.flexpa.com/" className="font-medium hover:underline text-indigo-600">Flexpa</a>
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  Today, I&apos;m building developer tooling for healthcare as a co-founder and CTO of Flexpa. We&apos;ve raised from some of the best VCs in the world including General Catalyst and a16z.
                </p>
                <p className="text-base">  
                  Previously, I was a solo-founder in <a href="#">Y Combinator</a>&apos;s Winter 2020 batch. Before that I was CTO @ <a href="https://www.universe.com/">Universe</a>, acquired by <a href="https://www.livenationentertainment.com/">Live Nation</a> in <a href="#">2015</a> where I managed a product team of 30.
                </p>
                <p className="text-base">
                  The breadth of my skills across engineering leadership, product development, and startups is available on a fractional or advisory basis to select companies.  
                </p>

                <p className="text-base">
                  <a href="#" >
                    {' '}
                    Contact me about fractional engineering leadership <span aria-hidden="true">&rarr;</span>{' '}
                  </a>
                </p>
                
                {/* Stats section */}
                <div className="mt-10">
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                    {stats.map((stat) => (
                      <div key={stat.label} className="border-b-2 border-gray-100 pb-6">
                        <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                        <dd className="text-3xl font-extrabold tracking-tight text-gray-900">{stat.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                
                <h3 className="text-xl font-medium text-gray-900">
                  Stack
                </h3>

                <p className="text-base leading-7">
                  <span className="font-bold">TypeScript</span> is my greenfield language of choice.{' '}
                  <span className="font-bold">Ruby</span> was my first love and opened my eyes.{' '}
                  <span className="font-bold">Elixir</span> and <span className="font-bold">Rust</span> are my weekend project languages.
                  When necessary, I can build in <span className="font-bold">Python</span> and <span className="font-bold">Go</span> too.
                </p>
                
                <p className="text-base leading-7">
                  On the frontend, I usually work with <span className="font-bold">React</span>,  <span className="font-bold">Next.js</span>, and <span className="font-bold">TailwindCSS</span>.{' '}
                  My preferred design tool is <span className="font-bold">Figma</span>.
                </p>

                <p className="text-base leading-7">
                  I&apos;m unreasonably effective at domain &amp; data modelling. <span className="font-bold">PostgreSQL</span> and <span className="font-bold">SQLite</span> (totally underrated) are my go-tos database-wise.{' '}
                  <span className="font-bold"> </span>
                </p>

                
              </div>
              
            </div>

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
