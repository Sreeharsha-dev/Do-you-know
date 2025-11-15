
import React, { useState, useEffect, CSSProperties } from 'react';

export interface CybercoreBackgroundProps {
    /** Number of animated light beams */
    beamCount?: number;
}

const DEFAULT_BEAM_COUNT = 70;

const CybercoreBackground: React.FC<CybercoreBackgroundProps> = ({
    beamCount = DEFAULT_BEAM_COUNT,
}) => {
    const [beams, setBeams] = useState<
        Array<{ id: number; type: 'primary' | 'secondary'; style: CSSProperties }>
    >([]);

    useEffect(() => {
        const generated = Array.from({ length: beamCount }).map((_, i) => {
            const riseDur = Math.random() * 3 + 5; // 5-8s rise
            // FIX: Explicitly type `type` to match the state's type definition.
            const type: 'primary' | 'secondary' = Math.random() < 0.25 ? 'secondary' : 'primary';
            return {
                id: i,
                type,
                style: {
                    left: `${Math.random() * 100}%`,
                    width: `${Math.floor(Math.random() * 2) + 1}px`,
                    animationDelay: `${Math.random() * 8}s`,
                    animationDuration: `${riseDur}s`,
                    height: `${Math.random() * 50 + 40}%`
                },
            };
        });
        setBeams(generated);
    }, [beamCount]);

    return (
        <div
            className="scene"
            role="img"
            aria-label="Animated cybercore grid background"
        >
            <div className="floor" />
            <div className="light-stream-container">
                {beams.map((beam) => (
                    <div
                        key={beam.id}
                        className={`light-beam ${beam.type}`}
                        style={beam.style}
                    />
                ))}
            </div>
        </div>
    );
};

export default CybercoreBackground;