
import SocialLinks from './SocialLinks';

const Profile = () => {
  return (
    <div className="flex flex-col items-center animate-fadeIn">
      <div className="portrait-container mb-8">
        <img 
          src="/lovable-uploads/c4d57fe5-2745-40bc-ad79-e29d8a2d9166.png" 
          alt="Tien Lai" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-2 gradient-text">Tien Lai</h1>
      
      <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6">
        <p className="text-white text-lg font-medium">Software Engineer @ Deloitte Consulting</p>
      </div>
      
      <p className="text-white/80 max-w-md text-center mb-6 px-4">
        Detail-oriented software engineer with experience in full-stack development, 
        cloud computing, and financial technology solutions.
      </p>
      
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {["Java", "Python", "React", "Angular", "AWS", "Azure"].map((skill) => (
          <span 
            key={skill}
            className="px-3 py-1 bg-gradient-to-r from-redMagenta/20 to-magenta/20 backdrop-blur-sm rounded-full text-white text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
      
      <SocialLinks />
    </div>
  );
};

export default Profile;
