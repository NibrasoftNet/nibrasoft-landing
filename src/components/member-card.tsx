import { CircleXIcon, PlusIcon } from 'lucide-react';
import type { MemberProps } from './sections/our-team-section';
import { AnimatePresence, motion } from 'motion/react';
import { useId } from 'react';
import { useTranslation } from 'react-i18next';

export type MemberCardProps = {
  member: MemberProps;
  isActive: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const MemberCard = ({ member, isActive, onOpen, onClose }: MemberCardProps) => {
  const id = useId();
  const { t } = useTranslation();
  return (
    <AnimatePresence>
      {!isActive && (
        <motion.div
          layoutId={`card-${member.id}-${id}`}
          onClick={onOpen}
          className="flex flex-col w-[250px] h-[350px] relative cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ layout: { duration: 0.4, ease: 'easeInOut' } }}
        >
          {/* Inner div with inverted-radius for the image */}
          <div className="inverted-radius w-full h-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt={member.name}
              src={member.imageUrl}
            />
          </div>

          {/* Plus Icon outside the mask */}
          <div className="absolute -bottom-6 -right-5 w-20 h-20 flex items-center justify-center z-10">
            <PlusIcon className="w-14 h-14 stroke-1 p-2 text-black bg-[#F2F1F6] rounded-xl" />
          </div>
        </motion.div>
      )}

      {isActive && (
        <motion.div
          layoutId={`card-${member.id}-${id}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm cursor-auto"
          transition={{ layout: { duration: 0.4, ease: 'easeInOut' } }}
        >
          <motion.div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-[90%] h-[90%] flex flex-col md:flex-row">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white"
            >
              <CircleXIcon className="w-6 h-6 text-gray-800" />
            </button>

            {/* Image section */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text content */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2">
                {t(`members.name-${member.id}`)}
              </h3>
              <p className="text-xl text-gray-600 mb-4 font-semibold">
                {t(`members.position-${member.id}`)}
              </p>
              <p className="text-gray-700 text-lg max-w-md">
                {t(`members.description-${member.id}`)}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MemberCard;
