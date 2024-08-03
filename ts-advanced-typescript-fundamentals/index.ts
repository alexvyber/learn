type Some = {
  shit?: {
    get?: () => number;
    set?: () => void;
  };
};

type Arg = {
  name: string;
  shit: string;
};

function doShit(lol: Arg, opts?: Some) {
  const pussy = opts?.shit?.get?.() ?? 2;
  return JSON.stringify(lol, null, pussy);
}

function doMoreShit(lol: Arg, opts?: Some) {
  const pussy = opts?.shit?.get?.() || 2;
  return JSON.stringify(lol, null, pussy);
}

const z = {
  name: "My Name Is",
  shit: "Shit",
};

const j = doShit(z, {
  shit: {
    get: () => 4,
  },
});

console.log(j);
