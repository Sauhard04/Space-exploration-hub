import React from 'react';

/* eslint-disable */

function Astronauts() {
  const astronauts = [
    {
      id: 1, name: 'Neil Armstrong', bio: 'First human on the Moon.', image: 'https://imgs.search.brave.com/UJeUBmSUIbOX8T1Nw0dcpXGpOy32L03qY735rokxF6c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/MDY5MjM1L3Bob3Rv/L25laWwtYXJtc3Ry/b25nLW5laWwtYXJt/c3Ryb25nLWluLTE5/NjktYXJtc3Ryb25n/LWFuLWFtZXJpY2Fu/LWFzdHJvbmF1dC13/YXMtdGhlLWZpcnN0/LXBlcnNvbi10by5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UWpxWGdLaWFoQUQ4/OExxdkVUVDNiVm9G/cnNQU1VtNnR3azNp/cWMxZERZST0'
    },
    {
        id: 2, name: 'Sally Ride', bio: 'First American woman in space.', image: 'https://imgs.search.brave.com/zyvyN3BSkl4CK1SNCUIeRrIs25LqcOT-Om8-49CyTpw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTE3/NDQyMDg4L3Bob3Rv/L2FzdHJvbmF1dC1z/YWxseS1yaWRlLWJl/Zm9yZS10aGUtY2hh/bGxlbmdlci1zcGFj/ZS1zaHV0dGxlLW1p/c3Npb24tc3RzLTQx/LWctaGVyLXNlY29u/ZC1zaHV0dGxlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1u/bDFKdVNzRldtaXln/aDZ2OEhmSTNSQ1Vl/YzZTMHJVSzZrZkdC/bW1TeV9vPQ' 
    },
    {
        id: 3, name: 'Buzz Aldrin', bio: 'Second person to walk on the Moon.', image: 'https://imgs.search.brave.com/8-WEm7B8vdSrWmy-wkUKD_M2_pJHbB_PKjp0zapZuFc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTE3/NDgxMjEwL3Bob3Rv/L2J1enotYWxkcmlu/LXNlY29uZC1tYW4t/dG8td2Fsay1vbi10/aGUtbW9vbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9anpF/RVVtZnVnbEF0Ujkx/ekJpWjkxWFo3dXRq/MnhVSDQxTG1fSUhl/Z3BKcz0' 
    },
    {
        id: 4, name: 'Yuri Gagarin', bio: 'First human to journey into outer space.', image: 'https://imgs.search.brave.com/Ckoh-KFC9BvtDB6ZCmADCQRBPjm0CMAkcSLSnBq3GY0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjY0/Mjg4NS9waG90by9y/dXNzaWFuLWFzdHJv/bmF1dC15dXJpLWdh/Z2FyaW4tdGFrZW4t/ZHVyaW5nLWhpcy12/aXNpdC10by1hZG1p/cmFsdHktaG91c2Ut/d2hlcmUtaGUtbWV0/LWhhcm9sZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9cXpp/aDBoeE9BTHM0clF2/TF8wREsxY2NDUjVz/cUZlSlFqQkpCV0ds/RzY1OD0' 
    },
    {
        id: 5, name: 'Chris Hadfield', bio: 'Famous Canadian astronaut and ISS commander.', image: 'https://imgs.search.brave.com/2OOrvOEYMwE5r9aMvR92IAxgtAq0flJcgG_IqaCXdWs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODM2/NjY4MjUwL3Bob3Rv/L3N5ZG5leS1uc3ct/Zm9ybWVyLWFzdHJv/bmF1dC1jaHJpcy1o/YWRmaWVsZC1wb3Nl/cy1kdXJpbmctYS1w/aG90by1zaG9vdC1p/bi1zeWRuZXktbmV3/LXNvdXRoLXdhbGVz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1NSFZvWXQ4Q0Zr/X29tMF9tc3JWQXhI/UmpVd2xvNV95ZmhK/UE8yakxmQmRjPQ' 
    },
    {
        id: 6, name: 'Kalpana Chawla', bio: 'First woman of Indian origin in space.', image: 'https://imgs.search.brave.com/Uo0YJrPWGQhi-n15TktjWPLIrkPVLpFxuBOJGEprNLs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTUx/OTc4OTQ0L3Bob3Rv/L2ZpbGUtcGhvdG8t/ZGF0ZWQtMTYtamFu/dWFyeS0yMDAzLXNo/b3dzLXVzLW1pc3Np/b24tc3BlY2lhbGlz/dC1rYWxwYW5hLWNo/YXdsYS13YXZpbmct/dG8td2VsbC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9aHBj/aFFfWkNLa0NPQXgz/VVgwUEpJaGtvTXBK/TEc0WXpFakRlcjVV/REdQaz0' 
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-white text-3xl font-semibold mb-8">Astronaut Profiles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {astronauts.map((astro) => (
          <div key={astro.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-gray-100 h-[550px]">
            <img src={astro.image} alt={astro.name} className="w-full h-54 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{astro.name}</h3>
              <p className="text-gray-600">{astro.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Astronauts;
