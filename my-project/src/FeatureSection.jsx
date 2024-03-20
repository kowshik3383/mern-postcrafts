import React from "react";

function FeatureSection() {
  return (
    <>
      <div
        id="features"
        className="justify-center ax-w-[700px] text-center"
      >
        <h2 className="mb-6 mt-6 text-3xl font-bold">
          Welcome to Postcrafts: Your Platform for Remote Collaboration
        </h2>
        <p className="mb-16 text-neutral-500 dark:text-neutral-300">
          At Postcrafts, we believe in the power of collaboration, especially
          when it comes to nurturing creativity and bringing ideas to life.
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <div className="m-4 sm:m-12 bg-gray-700 max-w-[300px] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5">
          <figure className="w-10 h-10 p-2 bg-blue-800 rounded-md">
            <svg width="24" height="24" fill="#FFFFFF">
              <path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"></path>
            </svg>
          </figure>
          <h4 className="py-2 text-white font-bold">Project Sharing</h4>
          <p className="text-base leading-7 text-white font-semibold space-y-4">
            Whether you&apos;re working on a digital art piece, a music composition, a
            design project, or any other creative endeavor, Postcrafts provides
            a centralized space for sharing your projects with collaborators
          </p>

          <div className="pt-5 pb-2 flex justify-center">
            <button className="w-36 h-10 font-semibold rounded-md bg-indigo-100 hover:scale-90 duration-500">
              Button
            </button>
          </div>
        </div>
        <div className="m-12 bg-gray-700 max-w-[300px] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5">
          <figure className="w-10 h-10 p-2 bg-blue-800 rounded-md">
            <svg width="24" height="24" fill="#FFFFFF">
              <path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"></path>
            </svg>
          </figure>
          <h4 className="py-2 text-white font-bold">Collaborative Tools</h4>
          <p className="text-base leading-7 text-white font-semibold space-y-4">
            From brainstorming sessions to project planning and execution,
            Postcrafts offers a suite of collaborative tools to streamline your
            workflow. Use interactive whiteboards for ideation, shared calendars
          </p>

          <div className="pt-5 pb-2 flex justify-center">
            <button className="w-36 h-10 font-semibold rounded-md bg-indigo-100 hover:scale-90 duration-500">
              Button
            </button>
          </div>
        </div>
        <div className="m-12 bg-gray-700 max-w-[300px] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5">
          <figure className="w-10 h-10 p-2 bg-blue-800 rounded-md">
            <svg width="24" height="24" fill="#FFFFFF">
              <path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"></path>
            </svg>
          </figure>
          <h4 className="py-2 text-white font-bold"> Feedback and Revision</h4>
          <p className="text-base leading-7 text-white font-semibold space-y-4">
            Receive feedback from collaborators in real-time and iterate on your
            projects seamlessly. Postcrafts allows for comments, annotations,
            and version control, ensuring that everyones input is heard
          </p>

          <div className="pt-5 pb-2 flex justify-center">
            <button className="w-36 h-10 font-semibold rounded-md bg-indigo-100 hover:scale-90 duration-500">
              Button
            </button>
          </div>
        </div>
        <div className="m-12 bg-gray-700 max-w-[300px] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5">
          <figure className="w-10 h-10 p-2 bg-blue-800 rounded-md">
            <svg width="24" height="24" fill="#FFFFFF">
              <path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"></path>
            </svg>
          </figure>
          <h4 className="py-2 text-white font-bold"> Privacy and Security</h4>
          <p className="text-base leading-7 text-white font-semibold space-y-4">
            We understand the importance of protecting your creative work. With
            Postcrafts, you have full control over who can access your projects
            and what level of permissions they have.
          </p>

          <div className="pt-5 pb-2 flex justify-center">
            <button className="w-36 h-10 font-semibold rounded-md bg-indigo-100 hover:scale-90 duration-500">
              Button
            </button>
          </div>
        </div>
        <div className="m-12 bg-gray-700 max-w-[300px] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5">
          <figure className="w-10 h-10 p-2 bg-blue-800 rounded-md">
            <svg width="24" height="24" fill="#FFFFFF">
              <path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"></path>
            </svg>
          </figure>
          <h4 className="py-2 text-white font-bold">Seamless Integration</h4>
          <p className="text-base leading-7 text-white font-semibold space-y-4">
            Postcrafts integrates with popular productivity tools such as Slack,
            Trello, and Google Workspace, allowing you to incorporate remote
            collaboration seamlessly into your existing workflow.
          </p>

          <div className="pt-5 pb-2 flex justify-center">
            <button className="w-36 h-10 font-semibold rounded-md bg-indigo-100 hover:scale-90 duration-500">
              Button
            </button>
          </div>
        </div>
        <div className="m-12 bg-gray-700 max-w-[300px] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5">
          <figure className="w-10 h-10 p-2 bg-blue-800 rounded-md">
            <svg width="24" height="24" fill="#FFFFFF">
              <path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"></path>
            </svg>
          </figure>
          <h4 className="py-2 text-white font-bold">Community Engagement</h4>
          <p className="text-base leading-7 text-white font-semibold space-y-4">
            Join a vibrant community of creatives, artists, designers, and
            innovators on Postcrafts. Share insights, seek inspiration, and
            collaborate with like-minded individuals who share your passion for
            creativity.
          </p>

          <div className="pt-5 pb-2 flex justify-center">
            <button className="w-36 h-10 font-semibold rounded-md bg-indigo-100 hover:scale-90 duration-500">
              Button
            </button>
          </div>
          </div>
        {/* Repeat the above divs for each grid item */}
      </section>
    </>
  );
}

export default FeatureSection;
