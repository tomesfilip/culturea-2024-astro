import { CULTUREA_YEAR } from '../../constants';

export const LogoLink = () => {
  return (
    <a className="logo" href="/">
      <h1 className="hidden">Culturea {CULTUREA_YEAR}</h1>
      <img
        src="/ikony/culturea-logo-white.svg"
        alt={`culturea ${CULTUREA_YEAR} logo`}
        width={200}
        height={46}
      />
    </a>
  );
};
