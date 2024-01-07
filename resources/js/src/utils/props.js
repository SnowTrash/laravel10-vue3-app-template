export const navRouteProp = {
    type: Object,
    required: true,
    validator: (value) => {
        return (
            "to" in value &&
            "text" in value &&
            "icon" in value &&
            "name" in value.to
        );
    },
};
