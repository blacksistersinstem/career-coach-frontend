interface IntroProps {
  introFxn: () => void;
}

const Introduction = ({ introFxn }: IntroProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-4">Find Your Dream Job Easily</h1>
      <p className="my-4">
        Gain a competitive edge of landing your dream job by creating a standout
        resume with ATS in mind.
      </p>
      <button
        onClick={introFxn}
        className="w-full text-white bg-blue-600 p-4 rounded-sm hover:bg-blue-500 my-4"
      >
        Let's Get Started
      </button>
    </div>
  );
};

export default Introduction;
