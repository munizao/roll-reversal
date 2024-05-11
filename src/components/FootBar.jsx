import './FootBar.css';
import { useState } from 'react';

const FootBar = ({game}) => {
  const [aboutShown, setAboutShown] = useState(false); 
  const {undo, reset} = game;
  const about = () => {
    setAboutShown(!aboutShown);
  }

  return (
    <div>
      <div className={'FootBar'}>
        <div className={'button'} onClick={undo}>Undo</div>
        <div className={'button'} onClick={reset}>Reset</div>
        <div className={'button'} onClick={about}>About Roll Reversal</div>
      </div>
      <div className={`About ${aboutShown ? '' : 'hidden'}`} onClick={about}>
        <h2>About Roll Reversal</h2>
        <p>Roll Reversal started as a little number puzzle that I 
          <a href={'https://mathstodon.xyz/@two_star/112242224494626411'}>posted</a> to my 
          Mastodon account, which then got picked up on Hacker News. Colm Mulcahy suggested 
          that I talk about it for the weekly Gathering 4 Gardner Zoom Social, so I decided that I
          wanted an interactive implementation to present. Then I learned that Arthur O'Dwyer 
          had written a <a href={'https://quuxplusone.github.io/blog/2024/04/22/reverse-the-list/'}>blog post</a> about it and Tomas Rokicki had submitted the sequence of longest 
          required steps for a given maximum starting number to the <a href={'https://oeis.org/A372008'}>Online Encyclopedia of Integer Sequences</a>.
        </p>
        <p>
          The code for this site is available on <a href={'https://github.com/munizao/roll-reversal'}>GitHub</a>.
        </p>
      </div>
    </div>

  );
}

export default FootBar;