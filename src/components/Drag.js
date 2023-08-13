import { useDrag } from 'react-dnd';

function DraggableImage({ image }) {
    const [, ref] = useDrag({
        type: 'IMAGE',
        item: { image },
    });

    return <img ref={ref} src={image.url} alt={image.name} width="100" />;
}
