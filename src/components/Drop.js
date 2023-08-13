import { useDrop } from 'react-dnd';

function DropZone({ onDrop }) {
    const [, ref] = useDrop({
        accept: 'IMAGE',
        drop: (item) => onDrop(item.image),
    });

    return <div ref={ref} style={{ minHeight: '100px', border: '1px dashed gray' }} />;
}
