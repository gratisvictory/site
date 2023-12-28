import { useSpring } from '@react-spring/web';

const useOpacity = () => {
  const [props] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    [],
  );

  return {
    props,
  };
};

export { useOpacity };
