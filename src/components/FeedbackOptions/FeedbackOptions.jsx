import Controls from '../Controls';
import {FeedbackList, Option} from './FeedbackOptions.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <FeedbackList>
            {options.map((option) => (
                <Option key={option}>
                    <Controls name={option} controlClick={onLeaveFeedback}></Controls>
                </Option>
            ))}
        </FeedbackList>
    )
};

export default FeedbackOptions;