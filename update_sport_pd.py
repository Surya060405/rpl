import os

file_path = 'src/components/SportPage.tsx'
if not os.path.exists(file_path):
    print(f"File not found: {file_path}")
    exit(1)

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# I will replace the whole table generation block with one that includes 'pd' support.
# Looking for the pattern from line 251 to roughly 310
import re

new_table_logic = """                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm text-left">
                                                <thead className="text-xs text-muted-foreground uppercase bg-white/5">
                                                    <tr>
                                                        <th className="px-6 py-3">Team</th>
                                                        {typeof pool.teams[0] === 'object' && (() => {
                                                            const teams = pool.teams as PoolTeam[];
                                                            const hasNrr = teams.some(t => t.nrr !== undefined);
                                                            const hasRd = teams.some(t => t.rd !== undefined);
                                                            const hasPd = teams.some(t => t.pd !== undefined);
                                                            return (
                                                                <>
                                                                    <th className="px-4 py-3 text-center">P</th>
                                                                    <th className="px-4 py-3 text-center">W</th>
                                                                    <th className="px-4 py-3 text-center">L</th>
                                                                    {hasNrr && <th className="px-4 py-3 text-center">NRR</th>}
                                                                    {hasRd && <th className="px-4 py-3 text-center">RD</th>}
                                                                    {hasPd && <th className="px-4 py-3 text-center">PD</th>}
                                                                    <th className="px-4 py-3 text-center">Pts</th>
                                                                </>
                                                            );
                                                        })()}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {pool.teams.map((team, idx) => {
                                                        const isObj = typeof team === 'object';
                                                        const teamObj = isObj ? (team as PoolTeam) : null;
                                                        const teamName = isObj ? teamObj.name : team;
                                                        const p = isObj ? teamObj.played : 0;
                                                        const w = isObj ? teamObj.won : 0;
                                                        const l = isObj ? teamObj.lost : 0;
                                                        const pts = isObj ? teamObj.points : 0;
                                                        const nrr = isObj ? teamObj.nrr : undefined;
                                                        const rd = isObj ? teamObj.rd : undefined;
                                                        const pd = isObj ? teamObj.pd : undefined;
                                                        
                                                        const teams = pool.teams as PoolTeam[];
                                                        const hasNrr = teams.some(item => typeof item === 'object' && (item as PoolTeam).nrr !== undefined);
                                                        const hasRd = teams.some(item => typeof item === 'object' && (item as PoolTeam).rd !== undefined);
                                                        const hasPd = teams.some(item => typeof item === 'object' && (item as PoolTeam).pd !== undefined);

                                                        return (
                                                            <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                                                <td className="px-6 py-4 font-medium text-white/90 whitespace-nowrap">
                                                                    {teamName as string}
                                                                </td>
                                                                {isObj && (
                                                                    <>
                                                                        <td className="px-4 py-4 text-center text-muted-foreground">{p}</td>
                                                                        <td className="px-4 py-4 text-center text-emerald-400">{w}</td>
                                                                        <td className="px-4 py-4 text-center text-destructive">{l}</td>
                                                                        {hasNrr && (
                                                                            <td className={`px-4 py-4 text-center font-mono text-xs ${
                                                                                nrr !== undefined && nrr > 0 ? 'text-emerald-400' :
                                                                                nrr !== undefined && nrr < 0 ? 'text-destructive' :
                                                                                'text-muted-foreground'
                                                                            }`}>
                                                                                {nrr !== undefined ? (nrr >= 0 ? "+" : "") + nrr.toFixed(3) : "-"}
                                                                            </td>
                                                                        )}
                                                                        {hasRd && (
                                                                            <td className={`px-4 py-4 text-center font-mono text-xs ${
                                                                                rd !== undefined && rd > 0 ? 'text-emerald-400' :
                                                                                rd !== undefined && rd < 0 ? 'text-destructive' :
                                                                                'text-muted-foreground'
                                                                            }`}>
                                                                                {rd !== undefined ? (rd >= 0 ? "+" : "") + rd : "-"}
                                                                            </td>
                                                                        )}
                                                                        {hasPd && (
                                                                            <td className={`px-4 py-4 text-center font-mono text-xs ${
                                                                                pd !== undefined && pd > 0 ? 'text-emerald-400' :
                                                                                pd !== undefined && pd < 0 ? 'text-destructive' :
                                                                                'text-muted-foreground'
                                                                            }`}>
                                                                                {pd !== undefined ? (pd >= 0 ? "+" : "") + pd : "-"}
                                                                            </td>
                                                                        )}
                                                                        <td className="px-4 py-4 text-center font-bold text-primary">{pts}</td>
                                                                    </>
                                                                )}
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>"""

pattern = re.compile(r'<div className="overflow-x-auto">.*?</table>\s*</div>', re.DOTALL)
if pattern.search(content):
    content = pattern.sub(new_table_logic, content)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("SportPage.tsx updated successfully with PD support")
else:
    print("Table pattern not found in SportPage.tsx")
"""
