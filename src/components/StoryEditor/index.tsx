import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { aiService } from '../../services/aiService';
import { validateStoryPrompt } from '../../utils/validation';

const StorySchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must be less than 100 characters')
    .required('Title is required'),
  prompt: Yup.string()
    .min(10, 'Prompt must be at least 10 characters')
    .max(500, 'Prompt must be less than 500 characters')
    .required('Prompt is required'),
  style: Yup.string().required('Style is required'),
  duration: Yup.number()
    .min(30, 'Duration must be at least 30 seconds')
    .max(300, 'Duration must be less than 5 minutes')
    .required('Duration is required')
});

interface StoryFormValues {
  title: string;
  prompt: string;
  style: string;
  duration: number;
}

const StoryEditor: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (values: StoryFormValues) => {
    try {
      setIsGenerating(true);
      setError(null);
      
      const validation = validateStoryPrompt(values.prompt);
      if (!validation.isValid) {
        throw new Error(validation.error);
      }

      const storyData = await aiService.generateStory(values.prompt, {
        style: values.style,
        duration: values.duration
      });

      // Handle successful story generation
      console.log('Story generated:', storyData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate story');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="story-editor">
      <h2>Create Your Story</h2>
      <Formik
        initialValues={{
          title: '',
          prompt: '',
          style: 'narrative',
          duration: 60
        }}
        validationSchema={StorySchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="story-form">
            <div className="form-group">
              <label htmlFor="title">Story Title</label>
              <Field
                id="title"
                name="title"
                type="text"
                className={errors.title && touched.title ? 'error' : ''}
              />
              {errors.title && touched.title && (
                <div className="error-message">{errors.title}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="prompt">Story Prompt</label>
              <Field
                as="textarea"
                id="prompt"
                name="prompt"
                className={errors.prompt && touched.prompt ? 'error' : ''}
              />
              {errors.prompt && touched.prompt && (
                <div className="error-message">{errors.prompt}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="style">Story Style</label>
              <Field as="select" id="style" name="style">
                <option value="narrative">Narrative</option>
                <option value="documentary">Documentary</option>
                <option value="educational">Educational</option>
                <option value="entertainment">Entertainment</option>
              </Field>
            </div>

            <div className="form-group">
              <label htmlFor="duration">Duration (seconds)</label>
              <Field
                type="number"
                id="duration"
                name="duration"
                min="30"
                max="300"
                step="30"
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button
              type="submit"
              disabled={isGenerating}
              className="submit-button"
            >
              {isGenerating ? 'Generating...' : 'Generate Story'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StoryEditor; 