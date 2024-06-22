/** @format */
import { useState } from 'react';
function Folder({ explorer }) {
	const [expand, setExpand] = useState(false);
	if (explorer.isFolder) {
		return (
			<div style={{ marginTop: 5 }}>
				<div
					className='folder'
					onClick={() => setExpand(!expand)}>
					<span>🗂️{explorer.name}</span>
				</div>
				<div style={{ display: expand ? 'block' : 'none', paddingLeft: 25 }}>
					{explorer.items.map((ep) => {
						return <Folder explorer={ep}></Folder>;
					})}
				</div>
			</div>
		);
	} else {
		return (
			<div className='file'>
				<span>🗒️{explorer.name}</span>
			</div>
		);
	}
}

export default Folder;
