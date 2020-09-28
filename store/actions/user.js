//引数に新しい値を受け取る
export const addClip = ({clip}) => {
    return {
        //アクションのtypeによって処理を分ける（値はそのまま渡す）
        type: 'ADD_CLIP',
        clip: clip,
    };
};

export const deleteClip = ({clip}) => {
    return {
        type: 'DELETE_CLIP',
        clip: clip,
    };
};