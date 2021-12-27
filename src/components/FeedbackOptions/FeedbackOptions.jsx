import Controls from '../Controls';
import {FeedbackList, Option} from './FeedbackOptions.styled'

const FeedbackOptions = ({ options, onFeedback }) => {
    return (
        <FeedbackList>
            {options.map((option) => (
                <Option key={option}>
                    <Controls name={option} controlClick={onFeedback}></Controls>
                </Option>
            ))}
        </FeedbackList>
    )
};

export default FeedbackOptions;