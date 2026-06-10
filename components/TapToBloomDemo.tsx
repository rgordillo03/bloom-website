'use client';
import { useState, useEffect, useRef } from 'react';

const PROMPTS = [
  { q: "What's calling for your attention right now?", cat: "awareness", icon: "🌿" },
  { q: "What small thing brought you joy today?", cat: "gratitude", icon: "🙏" },
  { q: "What's one way your partner could support you better this week?", cat: "needs", icon: "🤝" },
];

const SAMPLE_ANSWERS = [
  "The quiet morning light through my window. Just sitting with my coffee.",
  "Ronja sent me a voice note while she was at the bakery. Made me smile.",
  "More presence at dinner. Phones away. Just us.",
];

const FLOWER_COLORS = ['#C17F59', '#D4A574', '#E8C4B8', '#C9A96E', '#8B9E7E', '#B5C7A9', '#F0D5C8'];

type Step = 'rest' | 'tapping' | 'opening' | 'question' | 'typing' | 'planted' | 'garden';

export default function TapToBloomDemo() {
  const [step, setStep] = useState<Step>('rest');
  const [promptIdx, setPromptIdx] = useState(0);
  const [typedAnswer, setTypedAnswer] = useState('');
  const [flowers, setFlowers] = useState<number[]>([]);
  const [autoMode, setAutoMode] = useState(false);
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  const autoRef = useRef<NodeJS.Timeout | null>(null);

  const currentPrompt = PROMPTS[promptIdx];
  const currentSample = SAMPLE_ANSWERS[promptIdx];

  const handleTap = () => {
    if (step !== 'rest') return;
    setStep('tapping');
    setTimeout(() => setStep('opening'), 1200);
    setTimeout(() => setStep('question'), 2000);
  };

  const handleAnswer = () => {
    if (step !== 'question') return;
    setStep('typing');
    setTypedAnswer('');
    let i = 0;
    typingRef.current = setInterval(() => {
      if (i <= currentSample.length) {
        setTypedAnswer(currentSample.slice(0, i));
        i++;
      } else {
        if (typingRef.current) clearInterval(typingRef.current);
        setTimeout(() => {
          setStep('planted');
          setFlowers(f => [...f, Math.floor(Math.random() * FLOWER_COLORS.length)]);
        }, 600);
      }
    }, 40);
  };

  const handleNext = () => {
    setStep('rest');
    setTypedAnswer('');
    setPromptIdx((promptIdx + 1) % PROMPTS.length);
  };

  const reset = () => {
    setStep('rest');
    setTypedAnswer('');
    setFlowers([]);
    setPromptIdx(0);
  };

  // Auto-demo mode
  useEffect(() => {
    if (!autoMode) {
      if (autoRef.current) clearTimeout(autoRef.current);
      return;
    }
    const runAuto = () => {
      if (step === 'rest') {
        autoRef.current = setTimeout(handleTap, 1200);
      } else if (step === 'question') {
        autoRef.current = setTimeout(handleAnswer, 1500);
      } else if (step === 'planted') {
        autoRef.current = setTimeout(handleNext, 2500);
      }
    };
    runAuto();
    return () => {
      if (autoRef.current) clearTimeout(autoRef.current);
    };
  }, [step, autoMode, promptIdx]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (typingRef.current) clearInterval(typingRef.current);
      if (autoRef.current) clearTimeout(autoRef.current);
    };
  }, []);

  return (
    <section id="experience" style={{
      padding: '120px 24px',
      background: 'linear-gradient(180deg, var(--bg) 0%, var(--cream) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p className="section-label">How it works</p>
          <h2 style={{ maxWidth: 700, margin: '0 auto 20px' }}>
            <em>Tap. Reflect. Grow.</em>
          </h2>
          <p style={{
            fontSize: 17, color: 'var(--brown-m)',
            maxWidth: 540, margin: '0 auto', lineHeight: 1.6,
          }}>
            Thirty seconds a day. No login, no scrolling, no overload.
            Try it below — it's a real demo.
          </p>
        </div>

        {/* The interactive scene */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 40,
          alignItems: 'center',
          maxWidth: 880,
          margin: '0 auto',
        }}>

          {/* LEFT: The card on the fridge */}
          <div style={{
            position: 'relative',
            aspectRatio: '1/1',
            background: 'linear-gradient(135deg, #EDE4D3 0%, #D4C4A8 100%)',
            borderRadius: 24,
            overflow: 'hidden',
            boxShadow: 'var(--shadow-card)',
            cursor: step === 'rest' && !autoMode ? 'pointer' : 'default',
          }}
            onClick={() => !autoMode && step === 'rest' && handleTap()}
          >
            {/* Decorative leaves */}
            <svg style={{
              position: 'absolute', top: 30, left: 30, opacity: 0.5,
              animation: 'leafSway 6s ease-in-out infinite',
            }} width="48" height="48" viewBox="0 0 60 60" fill="none">
              <path d="M30 10C30 10 15 25 20 45C20 45 40 35 30 10Z" fill="#8B9E7E"/>
            </svg>
            <svg style={{
              position: 'absolute', bottom: 30, right: 30, opacity: 0.4,
              animation: 'leafSway 6s ease-in-out infinite 2s',
            }} width="40" height="40" viewBox="0 0 60 60" fill="none">
              <path d="M30 10C30 10 45 25 40 45C40 45 20 35 30 10Z" fill="#B5C7A9"/>
            </svg>

            {/* NFC waves animation */}
            {(step === 'tapping' || step === 'opening') && (
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 200, height: 200,
                pointerEvents: 'none',
              }}>
                {[0, 0.3, 0.6].map((delay, i) => (
                  <div key={i} style={{
                    position: 'absolute', inset: 0,
                    border: '2px solid var(--terra)',
                    borderRadius: '50%',
                    opacity: 0,
                    animation: `nfcRipple 1.2s ease-out ${delay}s`,
                  }}/>
                ))}
              </div>
            )}

            {/* The card */}
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: `translate(-50%, -50%) rotate(${step === 'tapping' ? '-2deg' : '-4deg'}) scale(${step === 'tapping' ? 1.05 : 1})`,
              width: '70%',
              aspectRatio: '1.6/1',
              background: 'linear-gradient(145deg, #FDF9F3 0%, #F5EBD9 100%)',
              borderRadius: 14,
              boxShadow: step === 'tapping'
                ? '0 24px 50px -10px rgba(193,127,89,0.45), 0 0 60px rgba(255,233,196,0.6)'
                : '0 20px 40px -10px rgba(46,36,28,0.3), 0 10px 20px -5px rgba(46,36,28,0.2)',
              padding: '16px 18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
              animation: step === 'rest' ? 'floatGentle 4s ease-in-out infinite' : 'none',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <svg width="16" height="16" viewBox="0 0 48 48" fill="none">
                  <path d="M24 8C24 8 18 16 18 24C18 30 20.7 34 24 36C27.3 34 30 30 30 24C30 16 24 8 24 8Z" fill="#8B9E7E"/>
                  <circle cx="24" cy="20" r="3" fill="#C17F59"/>
                </svg>
                <span style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: 17,
                  fontWeight: 500,
                  color: 'var(--ink)',
                }}>bloom</span>
              </div>
              <div style={{
                fontFamily: 'Fraunces, serif',
                fontStyle: 'italic',
                fontSize: 10,
                color: 'var(--brown-m)',
                lineHeight: 1.3,
              }}>tap. reflect.<br/>grow.</div>
            </div>

            {/* "Tap me" hint */}
            {step === 'rest' && !autoMode && (
              <div style={{
                position: 'absolute',
                bottom: 24, left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--ink)',
                color: 'var(--bg)',
                padding: '8px 16px',
                borderRadius: 100,
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.05em',
                animation: 'floatGentle 2s ease-in-out infinite',
              }}>
                👆 tap the card
              </div>
            )}
          </div>

          {/* RIGHT: The phone */}
          <div style={{
            position: 'relative',
            aspectRatio: '9/16',
            maxWidth: 280,
            margin: '0 auto',
            background: 'var(--ink)',
            borderRadius: 36,
            padding: 14,
            boxShadow: '0 30px 70px -15px rgba(46,36,28,0.4)',
          }}>
            {/* Notch */}
            <div style={{
              position: 'absolute',
              top: 22, left: '50%',
              transform: 'translateX(-50%)',
              width: 90, height: 22,
              background: 'var(--ink)',
              borderRadius: '0 0 14px 14px',
              zIndex: 10,
            }}/>

            {/* Screen */}
            <div style={{
              width: '100%', height: '100%',
              background: 'var(--bg)',
              borderRadius: 26,
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {/* Screen content based on step */}
              {step === 'rest' && (
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 24, opacity: 0.5 }}>
                  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" style={{ marginBottom: 12, opacity: 0.6 }}>
                    <path d="M24 8C24 8 18 16 18 24C18 30 20.7 34 24 36C27.3 34 30 30 30 24C30 16 24 8 24 8Z" fill="#8B9E7E"/>
                    <circle cx="24" cy="20" r="3" fill="#C17F59"/>
                  </svg>
                  <p style={{ fontSize: 13, color: 'var(--brown-l)', fontStyle: 'italic', fontFamily: 'Fraunces, serif' }}>
                    Tap the card to open
                  </p>
                </div>
              )}

              {(step === 'opening') && (
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 24, animation: 'fadeUp 0.6s ease' }}>
                  <svg width="42" height="42" viewBox="0 0 48 48" fill="none" style={{
                    animation: 'floatGentle 2s ease-in-out infinite',
                  }}>
                    <path d="M24 8C24 8 18 16 18 24C18 30 20.7 34 24 36C27.3 34 30 30 30 24C30 16 24 8 24 8Z" fill="#8B9E7E"/>
                    <circle cx="24" cy="20" r="3" fill="#C17F59"/>
                  </svg>
                  <p style={{ fontFamily: 'Fraunces, serif', fontSize: 17, color: 'var(--ink)', marginTop: 12 }}>
                    bloom
                  </p>
                </div>
              )}

              {(step === 'question' || step === 'typing') && (
                <div style={{ flex: 1, padding: 20, animation: 'fadeUp 0.5s ease', overflow: 'auto' }}>
                  <p style={{ fontSize: 9, color: 'var(--sage)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6, marginTop: 28 }}>
                    Today's question
                  </p>
                  <div style={{
                    background: 'linear-gradient(135deg, var(--terra), var(--terra-d))',
                    borderRadius: 14,
                    padding: 16,
                    marginBottom: 16,
                  }}>
                    <p style={{
                      fontFamily: 'Fraunces, serif',
                      fontSize: 14,
                      color: '#fff',
                      lineHeight: 1.4,
                    }}>{currentPrompt.q}</p>
                  </div>

                  <div style={{
                    background: 'var(--bg-card)',
                    borderRadius: 12,
                    padding: 12,
                    minHeight: 80,
                    fontSize: 11,
                    color: 'var(--brown)',
                    lineHeight: 1.5,
                    fontStyle: typedAnswer ? 'normal' : 'italic',
                  }}>
                    {typedAnswer || <span style={{ color: 'var(--brown-l)', opacity: 0.6 }}>Share your thoughts...</span>}
                    {step === 'typing' && <span style={{ animation: 'pulse 1s infinite' }}>|</span>}
                  </div>

                  {step === 'question' && !autoMode && (
                    <button onClick={handleAnswer} style={{
                      marginTop: 16,
                      width: '100%',
                      padding: '12px',
                      background: 'var(--ink)',
                      color: 'var(--bg)',
                      border: 'none',
                      borderRadius: 12,
                      fontSize: 12,
                      fontWeight: 500,
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                    }}>
                      Plant my bloom 🌸
                    </button>
                  )}
                </div>
              )}

              {step === 'planted' && (
                <div style={{
                  flex: 1,
                  background: 'linear-gradient(180deg, #E2EDD8 0%, #C8DDB5 50%, #B0C49E 100%)',
                  position: 'relative',
                  padding: 20,
                  animation: 'fadeUp 0.6s ease',
                }}>
                  <div style={{ paddingTop: 28, textAlign: 'center', marginBottom: 16 }}>
                    <p style={{ fontFamily: 'Fraunces, serif', fontSize: 14, color: 'var(--ink)', marginBottom: 4 }}>
                      Your Garden
                    </p>
                    <p style={{ fontSize: 10, color: 'var(--sage-d)' }}>
                      {flowers.length} bloom{flowers.length !== 1 ? 's' : ''} planted
                    </p>
                  </div>

                  <div style={{
                    position: 'absolute',
                    bottom: 30, left: 0, right: 0,
                    height: 200,
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    gap: 14,
                    padding: '0 20px',
                  }}>
                    {flowers.map((colorIdx, i) => (
                      <div key={i} style={{
                        position: 'relative',
                        animation: `scaleIn 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s both`,
                      }}>
                        <Flower color={FLOWER_COLORS[colorIdx]} size={i === flowers.length - 1 ? 28 : 22} />
                      </div>
                    ))}
                  </div>

                  {!autoMode && (
                    <button onClick={handleNext} style={{
                      position: 'absolute',
                      bottom: 16, left: 16, right: 16,
                      padding: '10px',
                      background: 'var(--ink)',
                      color: 'var(--bg)',
                      border: 'none',
                      borderRadius: 10,
                      fontSize: 11,
                      fontWeight: 500,
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                    }}>
                      Try another day →
                    </button>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Controls below */}
        <div style={{
          marginTop: 48,
          display: 'flex',
          gap: 12,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {flowers.length === 0 && step === 'rest' && (
            <button onClick={() => setAutoMode(true)} className="btn btn-secondary" style={{
              padding: '12px 22px',
              fontSize: 13,
            }}>
              ▶ Auto-play the experience
            </button>
          )}
          {(flowers.length > 0 || step !== 'rest') && (
            <button onClick={reset} className="btn btn-secondary" style={{
              padding: '12px 22px',
              fontSize: 13,
            }}>
              ↻ Reset garden
            </button>
          )}
        </div>

        {/* Below text */}
        <div style={{
          textAlign: 'center',
          marginTop: 56,
          maxWidth: 640,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          <p style={{
            fontFamily: 'Fraunces, serif',
            fontStyle: 'italic',
            fontSize: 18,
            color: 'var(--brown-m)',
            lineHeight: 1.5,
            marginBottom: 24,
          }}>
            "After 30 days, you have a small visible record of who you were becoming."
          </p>
          <a href="/pricing" className="btn btn-primary">
            Notify me when ready
            <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes nfcRipple {
          0% { opacity: 0; transform: scale(0.4); }
          30% { opacity: 0.7; transform: scale(0.7); }
          100% { opacity: 0; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}

function Flower({ color, size }: { color: string; size: number }) {
  return (
    <div style={{ position: 'relative', width: size, height: size * 2.5 }}>
      {/* Stem */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: 2, height: size * 1.5,
        background: 'var(--sage-d)',
        opacity: 0.7,
      }}/>
      {/* Petals */}
      <div style={{
        position: 'absolute',
        top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: size, height: size,
      }}>
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: '50%', left: '50%',
            width: size * 0.55, height: size * 0.32,
            background: color,
            opacity: 0.85,
            borderRadius: '50%',
            transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${size * 0.22}px)`,
          }}/>
        ))}
        {/* Center */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          width: size * 0.3, height: size * 0.3,
          background: 'var(--gold)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}/>
      </div>
    </div>
  );
}
