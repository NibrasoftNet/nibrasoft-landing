import MemberCard from '@/components/member-card';
import { useState } from 'react';

export type MemberProps = {
  id: number;
  name: string;
  description: string;
  position: string;
  imageUrl: string;
};

const ourTeamList: MemberProps[] = [
  {
    id: 1,
    name: 'Sofien Abidi',
    description: 'Full Stack Javascript Developer',
    position: 'Full Stack Javascript Developer',
    imageUrl: '/images/team/member-1.png',
  },
  {
    id: 2,
    name: 'Ahmad Chebbi',
    description: 'Full Stack Javascript Developer',
    position: 'Full Stack Javascript Developer',
    imageUrl: '/images/team/member-1.png',
  },
  {
    id: 3,
    name: 'Yahya Laouaib',
    description: 'Data Analysis / Python Developer',
    position: 'Data Analysis / Python Developer',
    imageUrl: '/images/team/member-1.png',
  },
  {
    id: 4,
    name: 'Rayen Ben Hassine',
    description: 'AI Specialist / Flutter Developer',
    position: 'AI Specialist / Flutter Developer',
    imageUrl: '/images/team/member-1.png',
  },
  {
    id: 5,
    name: 'Fatma Rekik',
    description: 'Senior UI/UX Designer',
    position: 'Senior UI/UX Designer',
    imageUrl: '/images/team/member-1.png',
  },
];

const OurTeamSection = () => {
  const [activeMember, setActiveMember] = useState<MemberProps | null>(null);

  return (
    <section className="w-screen flex flex-col justify-center p-10">
      <div className="flex flex-col w-full max-w-[1400px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Our Team</h2>
        <ul className="flex flex-wrap justify-center items-center gap-10">
          {ourTeamList.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              isActive={activeMember?.id === member.id}
              onOpen={() => setActiveMember(member)}
              onClose={() => setActiveMember(null)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurTeamSection;
