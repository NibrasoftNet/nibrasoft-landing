import { useTranslation } from 'react-i18next';

export type StatisticsType = {
  score: number;
  name: string;
  backgroundColor: string;
};

const statisticList: StatisticsType[] = [
  {
    score: 20,
    name: 'stat-clients',
    backgroundColor: 'bg-[#3466F6]',
  },
  {
    score: 10,
    name: 'stat-mobile',
    backgroundColor: 'bg-[#26DD88]',
  },
  {
    score: 10,
    name: 'stat-web',
    backgroundColor: 'bg-[#2D3950]',
  },
];

const Statistics = () => {
  const { t } = useTranslation();

  return (
    <section
      id="nibras-exp"
      className="section-landing min-h-[300px] justify-center"
    >
      <div className="section-landing-container">
        <ul className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 items-center p-4">
          {statisticList.map((stat: StatisticsType) => (
            <li
              dir="ltr"
              key={stat.name}
              className={`text-white flex col-span-1 w-full rounded-xl h-40 ${stat.backgroundColor} flex gap-2 items-center justify-center`}
            >
              <span className="text-5xl font-bold">+{stat.score}</span>
              <span className="font-semibold text-xl capitalize">
                {t(stat.name)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Statistics;
