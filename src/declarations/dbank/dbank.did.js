export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'checkBalance' : IDL.Func([], [IDL.Float64], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
    'topUp' : IDL.Func([IDL.Float64], [], ['oneway']),
    'withdrawl' : IDL.Func([IDL.Float64], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
