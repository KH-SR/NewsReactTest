//初期値を与える必要あり
const initialState = {
    clips: [],
};

//引数に前回のstateを受け取って、initialに代入する(actionにclipの新しい値が入っている)
const reducer = (state = initialState, action) => {
//アクションのタイプによって処理を分ける
switch (action.type) {
case 'ADD_CLIP':
    return {
        //前回のstateを展開する
        ...state,
        //前回の値の配列に今回の値を追加する
        clips: [...state.clips, action.clip],
    };
    case 'DELETE_CLIP':
        return {
        //前回のstateを展開する
        ...state,
        //受け取ったurlと違う値のみ、新しい配列として返す
        clips: state.clips.filter(clip => clip.url !== action.clip.url),
        };
        default:
            return state;
}
};

export default reducer;