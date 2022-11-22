import { Suspense } from 'react';
import Image from 'next/image';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Dhruv Pandya
              </h1>
              <h2 className="font-bold text-gray-700 dark:text-gray-200 mb-4">
                React Native
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Software experience in design, development and support of Mobile
                applications using React Native, Firebase, Internationalization
                (I18n), Localization (L10n), Redux, Mobx & GraphQL.
              </p>
            </div>
            <div className="w-[120px] sm:w-[260px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Dhruv Pandya"
                height={260}
                width={260}
                src="/avatar.jpeg"
                sizes="80vw"
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            What I can offer
          </h3>
          <p className="text-gray-600 dark:text-gray-400 ">
            - React-Native
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            - Redux, Saga
          </p>
          <p className="text-gray-600 dark:text-gray-400 ">
          - Custom Theme development with React Native , authentication,authorisation & state management.
          </p>
          <p className="text-gray-600 dark:text-gray-400 ">
          - Developing custom theme, custom components, managing
states and api integration, implementation of hooks.
          </p>
          <p className="text-gray-600 dark:text-gray-400 ">
          - Payment Gateway integration.
          </p>
          <p className="text-gray-600 dark:text-gray-400 ">
          - Developing Internationalization (I18N), Localization (L10N) and
UTF-8 of software products. 
          </p>
          <p className="text-gray-600 dark:text-gray-400 ">
          - Application deployment and performance tuning 
          </p>
          <p className="text-gray-600 dark:text-gray-400 ">
          -All phases of software development life cycle 
          </p>
          <p className="text-gray-600 dark:text-gray-400 ">
          - Cohesive team worker, having strong analytical, problem solving,
excellent communication and interpersonalskills
          </p>
          {/* <div className="flex gap-6 flex-col md:flex-row">
            <BlogPostCard
              title="React-Native
              Redux, Saga
              Custom Theme development with React Native , authentication,
              authorisation & state management.
               Developing custom theme, custom components, managing
              states and api integration, implementation of hooks.
               Developing multilingual application.
               Payment Gateway integration.
               Developing Internationalization (I18N), Localization (L10N) and
              UTF-8 of software products.
               Application deployment and performance tuning
               All phases of software development life cycle"
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <BlogPostCard
              title="Migration to React. Adopting React functionality, wrapping the code of your existing architecture into React components."
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            />
            <BlogPostCard
              title="Career mentoring. Not sure how to start or how to take the next step in your software engineer career, I can help you."
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
          </div> */}
          {/* <a
            href="https://calendly.com/olserra/15min"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            <>
              {'Get in touch'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </>
          </a> */}
        </div>
      </Container>
    </Suspense>
  );
}
