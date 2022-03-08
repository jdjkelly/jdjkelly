import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const stats = [
  { label: 'Experience', value: '12 years' },
  { label: 'Team building', value: '55 hires' },
  { label: 'Fundraising', value: '$14.5m' },
  { label: 'Language of choice', value: 'TypeScript' },
]

const Home: NextPage = () => {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Joshua Kelly</title>
        <meta name="description" content="Joshua Kelly is a YC Founder and CTO @ Flexpa" />
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
                  Previously, I was a solo-founder in <a href="https://www.ycombinator.com/">Y Combinator</a>&apos;s Winter 2020 batch. Before that I was CTO @ <a href="https://www.universe.com/">Universe</a>, acquired by <a href="https://www.livenationentertainment.com/">Live Nation</a> in <a href="https://betakit.com/universe-acquired-by-ticketmaster/">2015</a> where I managed a product team of 30.
                </p>
                <p className="text-base">
                  The breadth of my skills across engineering leadership, product development, and startups is available on a fractional or advisory basis to select companies.  
                </p>
                <p className="text-base">
                  <span className="text-indigo-600 font-medium hover:underline hover:cursor-pointer" onClick={() => setShowEmail(true)}>
                    {' '}
                    Contact me about fractional engineering leadership <span aria-hidden="true">&rarr;</span>
                  </span>
                  { showEmail ? " jdjkelly@gmail.com" : null }
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
                  Stack Experience
                </h3>
                <p className="text-base leading-7">
                  <span className="font-bold">TypeScript</span> (ES6+, Node.js) is my greenfield language of choice.{' '}
                  <span className="font-bold">Ruby</span> (Rails) was the first language I loved.{' '}
                  <span className="font-bold">Elixir</span> and <span className="font-bold">Rust</span> are my weekend project languages.
                  When necessary, I can build in <span className="font-bold">Python</span> and <span className="font-bold">Go</span> too.
                </p>
                <p className="text-base leading-7">
                  On the frontend, I usually work with <span className="font-bold">React</span>, <span className="font-bold">Next.js</span>, and <span className="font-bold">TailwindCSS</span>.{' '}
                  My preferred design tool is <span className="font-bold">Figma</span>.
                </p>
                <p className="text-base leading-7">
                  As far as protocols and query languages go, I launched a <span className="font-bold">GraphQL</span> API at Universe in 2017 (<em>way</em> before it became mainstream). I have special depth with <span className="font-bold">OAuth</span> - having launched Ticketmaster's production fan OAuth service.
                </p>
                <p className="text-base leading-7">
                  I&apos;m unreasonably effective at data modelling. <span className="font-bold">PostgreSQL</span> and <span className="font-bold">SQLite</span> (totally underrated) are my go-tos database-wise.{' '}
                  <span className="font-bold"> </span>
                </p>
                <p>
                  Recently, my work in healthcare has led to special knowledge of protocols like <span className="font-bold">FHIR</span>.
                </p>
                <p>
                  Before anyone had heard about dog-themed meme coins and bored apes, I was building on <span className="font-bold">Ethereum</span>, <span className="font-bold">Solidity</span>, and <span className="font-bold">web3.js</span> at ETHGlobal (Waterloo, Denver, and San Francisco).
                </p>
                <hr/>
                <h3 className="text-xl font-medium text-gray-900">
                  Select Projects
                </h3>
                <ul className={styles.List}>
                  <li>
                    Featured alongside Naveen Selvadurai (founder, Foursquare), <a href="https://www.theverge.com/2013/6/4/4392996/fitness-tracker-data-platforms-launch-giving-users-control">The Verge wrote about my quantified-self tracking application</a>
                  </li>
                  <li>
                    Four years ago, before you had heard of NFTs, I won <a href="https://blog.openzeppelin.com/ethdenver-zeppelin-prize-winners-e1ac45778434/">OpenZepplin's ETHDenver bounty extending their industry ERC721 contract</a> to create DecentPost - the first decentralized logistics app
                  </li>
                  <li>
                    A talk I gave recently at FHIR North on <a href="https://youtu.be/I1YhmOIpaBU">building type-safe applications in healthcare</a>
                  </li>
                </ul>
                <hr/>
                <h3 className="text-xl font-medium text-gray-900">
                  More
                </h3>
                <ul className={styles.List}>
                  <li><a href="https://www.linkedin.com/in/joshua-kelly-444b03150/">LinkedIn</a></li>
                  <li><a href="https://news.ycombinator.com/user?id=joshuakelly">HackerNews</a></li>
                  <li><a href="https://twitter.com/jdjkelly">Twitter</a></li>
                </ul>
                <p className="text-base">
                  <span className="text-indigo-600 font-medium hover:underline hover:cursor-pointer" onClick={() => setShowEmail(true)}>
                    {' '}
                    Contact me about fractional engineering leadership <span aria-hidden="true">&rarr;</span>
                  </span>
                  { showEmail ? " jdjkelly@gmail.com" : null }
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
