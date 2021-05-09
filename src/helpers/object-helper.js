class ObjectHelper {
    ifSame(first, second) {
        return JSON.stringify(first) === JSON.stringify(second)
    }
}

const objectHelper = new ObjectHelper()
export default objectHelper;
